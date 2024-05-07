import React from "react";
import Image from "next/image";

export const PageLoader: React.FC = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="flex h-screen justify-center items-center">
      <Image className="" src={loadingImg} alt="Loading..." height={50} width={50} />
    </div>
  );
};