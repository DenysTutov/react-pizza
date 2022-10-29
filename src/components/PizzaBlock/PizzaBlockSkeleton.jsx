import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaBlockSkeleton = () => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="124" r="124" />
      <rect x="0" y="268" rx="10" ry="10" width="280" height="27" />
      <rect x="0" y="315" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="431" rx="10" ry="10" width="116" height="27" />
      <rect x="127" y="421" rx="25" ry="25" width="153" height="45" />
    </ContentLoader>
  </div>
);
