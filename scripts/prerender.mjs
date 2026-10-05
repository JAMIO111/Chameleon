// Runs after `vite build` and the SSR build: renders each route to static HTML
// so crawlers, social previews and first paint get real content before any JS.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { SITE, ROUTES, seoHead } from "../src/lib/site.js";

const dist = path.resolve("dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render } = await import(
  pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href
);

const ROOT = '<div id="root"></div>';
const SEO_BLOCK = /<!--seo-start-->[\s\S]*?<!--seo-end-->/;
if (!template.includes(ROOT) || !SEO_BLOCK.test(template)) {
  throw new Error("dist/index.html is missing the root div or SEO markers");
}

function page(url, head) {
  const app = render(url);
  return template
    .replace(SEO_BLOCK, () => `<!--seo-start-->${head}<!--seo-end-->`)
    .replace(ROOT, () => `<div id="root">${app}</div>`);
}

for (const route of Object.keys(ROUTES)) {
  const html = page(route, seoHead({ ...ROUTES[route], url: SITE.url + route }));
  const out =
    route === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, route, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`prerendered ${route.padEnd(22)} ${(html.length / 1024).toFixed(1)} kB`);
}

const notFound = page(
  "/404",
  seoHead({
    title: `Page not found | ${SITE.name}`,
    description: ROUTES["/"].description,
    url: `${SITE.url}/`,
    noindex: true,
  }),
);
fs.writeFileSync(path.join(dist, "404.html"), notFound);
console.log(`prerendered 404.html${" ".repeat(13)} ${(notFound.length / 1024).toFixed(1)} kB`);
