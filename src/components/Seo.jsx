import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, ROUTES } from "@/lib/site";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) return el?.remove();
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const route = ROUTES[path];

    if (!route) {
      document.title = `Page not found | ${SITE.name}`;
      setMeta("name", "robots", "noindex");
      setCanonical(null);
      return;
    }

    const url = `${SITE.url}${path}`;
    document.title = route.title;
    document.head.querySelector('meta[name="robots"]')?.remove();
    setMeta("name", "description", route.description);
    setMeta("property", "og:title", route.title);
    setMeta("property", "og:description", route.description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", route.title);
    setMeta("name", "twitter:description", route.description);
    setCanonical(url);
  }, [pathname]);

  return null;
}
