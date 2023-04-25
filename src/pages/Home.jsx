import React from "react";
import FeaturedPost from "../components/FeaturedPost";
import InfoPosts from "../components/InfoPosts";

const Home = () => {
  return (
    <div className="max-w-[1080px] mx-auto pb-24 px-4 md:px-2 lg:px-0">
      <FeaturedPost />
      <InfoPosts />
    </div>
  );
};

export default Home;
