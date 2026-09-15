// Add the real photo for each key below to src/assets/gallery/ using these
// exact filenames. Until each file exists, importing this module will fail
// to build — vite-imagetools resolves these at build time, so it needs the
// files to be present on disk.
import beforeHeroSrc from "@/assets/gallery/before-hero.png?w=1200&format=webp";
import beforeHeroSrcSet from "@/assets/gallery/before-hero.png?w=480;768;1200;1600&format=webp&as=srcset";
import afterHeroSrc from "@/assets/gallery/after-hero.png?w=1200&format=webp";
import afterHeroSrcSet from "@/assets/gallery/after-hero.png?w=480;768;1200;1600&format=webp&as=srcset";
import glossKitchenSrc from "@/assets/gallery/3.png?w=1200&format=webp";
import glossKitchenSrcSet from "@/assets/gallery/3.png?w=480;768;1200;1600&format=webp&as=srcset";
import sageKitchenSrc from "@/assets/gallery/sage-green-kitchen.png?w=1200&format=webp";
import sageKitchenSrcSet from "@/assets/gallery/sage-green-kitchen.png?w=480;768;1200;1600&format=webp&as=srcset";
import marbleMacroSrc from "@/assets/gallery/5.png?w=1200&format=webp";
import marbleMacroSrcSet from "@/assets/gallery/5.png?w=480;768;1200;1600&format=webp&as=srcset";
import mediaWallSrc from "@/assets/gallery/6.png?w=1200&format=webp";
import mediaWallSrcSet from "@/assets/gallery/6.png?w=480;768;1200;1600&format=webp&as=srcset";
import handleMacroSrc from "@/assets/gallery/7.png?w=1200&format=webp";
import handleMacroSrcSet from "@/assets/gallery/7.png?w=480;768;1200;1600&format=webp&as=srcset";
import marbleWorktopSrc from "@/assets/gallery/8.png?w=1200&format=webp";
import marbleWorktopSrcSet from "@/assets/gallery/8.png?w=480;768;1200;1600&format=webp&as=srcset";
import commercialCabinetSrc from "@/assets/gallery/commercial-cabinet.png?w=1200&format=webp";
import commercialCabinetSrcSet from "@/assets/gallery/commercial-cabinet.png?w=480;768;1200;1600&format=webp&as=srcset";
import oakTopSrc from "@/assets/gallery/oak-top.png?w=1200&format=webp";
import oakTopSrcSet from "@/assets/gallery/oak-top.png?w=480;768;1200;1600&format=webp&as=srcset";
import matteBlackKitchenSrc from "@/assets/gallery/matte-black-kitchen.png?w=1200&format=webp";
import matteBlackKitchenSrcSet from "@/assets/gallery/matte-black-kitchen.png?w=480;768;1200;1600&format=webp&as=srcset";
import beigeMarbleMediaWallSrc from "@/assets/gallery/beige-marble-media-wall.png?w=1200&format=webp";
import beigeMarbleMediaWallSrcSet from "@/assets/gallery/beige-marble-media-wall.png?w=480;768;1200;1600&format=webp&as=srcset";

export const IMAGES = {
  beforeHero: { src: beforeHeroSrc, srcSet: beforeHeroSrcSet },
  afterHero: { src: afterHeroSrc, srcSet: afterHeroSrcSet },
  glossKitchen: { src: glossKitchenSrc, srcSet: glossKitchenSrcSet },
  sageKitchen: { src: sageKitchenSrc, srcSet: sageKitchenSrcSet },
  marbleMacro: { src: marbleMacroSrc, srcSet: marbleMacroSrcSet },
  mediaWall: { src: mediaWallSrc, srcSet: mediaWallSrcSet },
  handleMacro: { src: handleMacroSrc, srcSet: handleMacroSrcSet },
  oakTop: { src: oakTopSrc, srcSet: oakTopSrcSet },
  matteBlackKitchen: {
    src: matteBlackKitchenSrc,
    srcSet: matteBlackKitchenSrcSet,
  },
  marbleWorktop: { src: marbleWorktopSrc, srcSet: marbleWorktopSrcSet },
  commercialCabinet: {
    src: commercialCabinetSrc,
    srcSet: commercialCabinetSrcSet,
  },
  beigeMarbleMediaWall: {
    src: beigeMarbleMediaWallSrc,
    srcSet: beigeMarbleMediaWallSrcSet,
  },
};

export const SOCIALS = {
  facebook: "https://www.facebook.com/chameleonhomewrapping/",
  instagram: "https://www.instagram.com/chameleon_home_wrapping/",
  linkedin: "https://www.linkedin.com/in/ian-kyle-b1a929130/",
};
