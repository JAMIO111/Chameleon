import * as React from "react";

const FALLBACK_IMAGE_URL =
  "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png";

/**
 * Renders a local image imported via vite-imagetools (`src` as `{ src, srcSet }`,
 * generated at build time) or a plain external URL (`src` as a string, no
 * responsive srcSet). Falls back to a generic placeholder on load failure or
 * a missing src.
 */
export const Image = React.forwardRef(
  ({ src, sizes = "100vw", alt = "", className, onError, ...props }, ref) => {
    const [failed, setFailed] = React.useState(false);
    React.useEffect(() => setFailed(false), [src]);

    const resolvedSrc = typeof src === "string" ? src : src?.src;
    const resolvedSrcSet = typeof src === "string" ? undefined : src?.srcSet;

    if (!resolvedSrc || failed) {
      return (
        <img
          ref={ref}
          src={FALLBACK_IMAGE_URL}
          alt={alt}
          className={className}
          {...props}
          data-fallback-image
        />
      );
    }

    return (
      <img
        ref={ref}
        src={resolvedSrc}
        srcSet={resolvedSrcSet}
        sizes={resolvedSrcSet ? sizes : undefined}
        loading="lazy"
        alt={alt}
        className={className}
        onError={(event) => {
          setFailed(true);
          onError?.(event);
        }}
        {...props}
      />
    );
  },
);
Image.displayName = "Image";
