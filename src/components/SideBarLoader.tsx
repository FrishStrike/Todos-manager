import ContentLoader from "react-content-loader";
import React from "react";

const SidebarLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={150}
      viewBox="0 0 400 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="163" cy="29" r="8" />
      <rect x="178" y="24" rx="5" ry="5" width="220" height="10" />
      <circle cx="163" cy="59" r="8" />
      <rect x="178" y="54" rx="5" ry="5" width="220" height="10" />
      <circle cx="163" cy="89" r="8" />
      <rect x="178" y="85" rx="5" ry="5" width="220" height="10" />
      <circle cx="163" cy="119" r="8" />
      <rect x="178" y="114" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  );
};

SidebarLoader.metadata = {
  name: "Fahim Hasasn",
  github: "fahim-tonmoy",
  description: "A loading skeleton for your playlist.",
  filename: "Sidebar",
};

export default SidebarLoader;
