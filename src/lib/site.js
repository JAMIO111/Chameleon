// Single source of truth for site-wide details. Also read by vite.config.js to
// build index.html tags, robots.txt, sitemap.xml and the LocalBusiness JSON-LD,
// so keep this file free of aliases (@/...) and JSX.
export const SITE = {
  name: "Chameleon Home Wrapping",
  url: "https://chameleon-one-ochre.vercel.app",
  email: "hello@chameleonhomewrapping.co.uk",
  // PLACEHOLDER: Ofcom drama-range number. Replace with the real number.
  phone: "+447700900123",
  phoneDisplay: "07700 900123",
  locality: "Newcastle upon Tyne",
  region: "Tyne and Wear",
  areaServed: [
    { type: "City", name: "Newcastle upon Tyne" },
    { type: "AdministrativeArea", name: "North East England" },
  ],
  image: "/images/social-share.jpg",
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: "Kitchen with red wrapped cabinets and a white worktop island",
  socials: {
    facebook: "https://www.facebook.com/chameleonhomewrapping/",
    instagram: "https://www.instagram.com/chameleon_home_wrapping/",
    linkedin: "https://www.linkedin.com/in/ian-kyle-b1a929130/",
  },
};

export const ROUTES = {
  "/": {
    title: "Chameleon Home Wrapping | Vinyl Wrapping in Newcastle",
    description:
      "Newcastle's vinyl wrapping specialists. Kitchens, worktops, wardrobes and fitted furniture transformed across the North East. Wrapped, not replaced.",
  },
  "/about": {
    title: "About Us | Chameleon Home Wrapping, Newcastle",
    description:
      "Meet the Newcastle vinyl wrapping team behind Chameleon: 10+ years' combined experience transforming kitchens and interiors across the North East.",
  },
  "/contact": {
    title: "Free Vinyl Wrapping Quote | Chameleon Newcastle",
    description:
      "Get a free, no-obligation quote for kitchen, worktop, wardrobe or commercial vinyl wrapping in Newcastle and the North East, with an instant guide price.",
  },
  "/services/commercial": {
    title: "Commercial Vinyl Wrapping Newcastle | Chameleon",
    description:
      "Commercial vinyl wrapping in Newcastle and the North East: offices, retail, hospitality, lifts and glass transformed without the cost of replacement.",
  },
};
