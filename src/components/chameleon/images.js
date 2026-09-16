// Add the real photo for each key below to src/assets/gallery/ using these
// exact filenames. Until each file exists, importing this module will fail
// to build — vite-imagetools resolves these at build time, so it needs the
// files to be present on disk.
import beforeHeroSrc from "@/assets/gallery/before-hero-2.png?w=1200&format=webp";
import beforeHeroSrcSet from "@/assets/gallery/before-hero-2.png?w=480;768;1200;1600&format=webp&as=srcset";
import afterHeroSrc from "@/assets/gallery/after-hero-2.png?w=1200&format=webp";
import afterHeroSrcSet from "@/assets/gallery/after-hero-2.png?w=480;768;1200;1600&format=webp&as=srcset";
import matteSaharaKitchenSrc from "@/assets/gallery/matte-sahara-kitchen.jpg?w=1200&format=webp";
import matteSaharaKitchenSrcSet from "@/assets/gallery/matte-sahara-kitchen.jpg?w=480;768;1200;1600&format=webp&as=srcset";
import sageKitchenSrc from "@/assets/gallery/sage-green-kitchen.png?w=1200&format=webp";
import sageKitchenSrcSet from "@/assets/gallery/sage-green-kitchen.png?w=480;768;1200;1600&format=webp&as=srcset";
import sageGreenKitchenSrc from "@/assets/gallery/sage-green-kitchen-2.jpg?w=1200&format=webp";
import sageGreenKitchenSrcSet from "@/assets/gallery/sage-green-kitchen-2.jpg?w=480;768;1200;1600&format=webp&as=srcset";
import onyxWorktopSrc from "@/assets/gallery/onyx-worktop.png?w=1200&format=webp";
import onyxWorktopSrcSet from "@/assets/gallery/onyx-worktop.png?w=480;768;1200;1600&format=webp&as=srcset";
import commercialCabinetSrc from "@/assets/gallery/commercial-cabinet.png?w=1200&format=webp";
import commercialCabinetSrcSet from "@/assets/gallery/commercial-cabinet.png?w=480;768;1200;1600&format=webp&as=srcset";
import oakTopSrc from "@/assets/gallery/oak-top.png?w=1200&format=webp";
import oakTopSrcSet from "@/assets/gallery/oak-top.png?w=480;768;1200;1600&format=webp&as=srcset";
import matteBlackKitchenSrc from "@/assets/gallery/matte-black-kitchen.png?w=1200&format=webp";
import matteBlackKitchenSrcSet from "@/assets/gallery/matte-black-kitchen.png?w=480;768;1200;1600&format=webp&as=srcset";
import beigeMarbleMediaWallSrc from "@/assets/gallery/beige-marble-media-wall.png?w=1200&format=webp";
import beigeMarbleMediaWallSrcSet from "@/assets/gallery/beige-marble-media-wall.png?w=480;768;1200;1600&format=webp&as=srcset";
import fitterWorkingSrc from "@/assets/gallery/fitter-working.png?w=1200&format=webp";
import fitterWorkingSrcSet from "@/assets/gallery/fitter-working.png?w=480;768;1200;1600&format=webp&as=srcset";
import mediaWall2Src from "@/assets/gallery/media-wall-2.jpg?w=1200&format=webp";
import mediaWall2SrcSet from "@/assets/gallery/media-wall-2.jpg?w=480;768;1200;1600&format=webp&as=srcset";
import whiteDrawerSrc from "@/assets/gallery/white-drawer.jpg?w=1200&format=webp";
import whiteDrawerSrcSet from "@/assets/gallery/white-drawer.jpg?w=480;768;1200;1600&format=webp&as=srcset";
import fittedWardrobeSrc from "@/assets/gallery/fitted-wardrobe.jpg?w=1200&format=webp";
import fittedWardrobeSrcSet from "@/assets/gallery/fitted-wardrobe.jpg?w=480;768;1200;1600&format=webp&as=srcset";

export const IMAGES = {
  beforeHero: { src: beforeHeroSrc, srcSet: beforeHeroSrcSet },
  afterHero: { src: afterHeroSrc, srcSet: afterHeroSrcSet },
  matteSaharaKitchen: {
    src: matteSaharaKitchenSrc,
    srcSet: matteSaharaKitchenSrcSet,
  },
  sageKitchen: { src: sageKitchenSrc, srcSet: sageKitchenSrcSet },
  mediaWall2: { src: mediaWall2Src, srcSet: mediaWall2SrcSet },
  fitterWorking: { src: fitterWorkingSrc, srcSet: fitterWorkingSrcSet },
  oakTop: { src: oakTopSrc, srcSet: oakTopSrcSet },
  matteBlackKitchen: {
    src: matteBlackKitchenSrc,
    srcSet: matteBlackKitchenSrcSet,
  },
  onyxWorktop: { src: onyxWorktopSrc, srcSet: onyxWorktopSrcSet },
  commercialCabinet: {
    src: commercialCabinetSrc,
    srcSet: commercialCabinetSrcSet,
  },
  beigeMarbleMediaWall: {
    src: beigeMarbleMediaWallSrc,
    srcSet: beigeMarbleMediaWallSrcSet,
  },
  sageGreenKitchen: {
    src: sageGreenKitchenSrc,
    srcSet: sageGreenKitchenSrcSet,
  },
  whiteDrawer: { src: whiteDrawerSrc, srcSet: whiteDrawerSrcSet },
  fittedWardrobe: { src: fittedWardrobeSrc, srcSet: fittedWardrobeSrcSet },
};

export const SOCIALS = {
  facebook: "https://www.facebook.com/chameleonhomewrapping/",
  instagram: "https://www.instagram.com/chameleon_home_wrapping/",
  linkedin: "https://www.linkedin.com/in/ian-kyle-b1a929130/",
};
