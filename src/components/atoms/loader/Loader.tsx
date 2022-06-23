import React from "react";
import Lottie from "react-lottie";
import loaderData from "public/loader-primary.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
};

export default Loader;
