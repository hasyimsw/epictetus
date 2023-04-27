import React from "react";
import FeaturedThumbnail from "../assets/featured-thumbnail.png";
import InfoPost from "./InfoPost";
import avatar1 from "../assets/author-1.jpg";

const Home = () => {
  return (
    <div className="max-w-[1080px] mx-auto mt-14">
      <div className="md:flex block lg:items-center items-start lg:gap-x-7 md:gap-x-3">
        <div className="lg:w-7/12 md:w-6/12 w-full mb-5">
          <img src={FeaturedThumbnail} alt="" className="rounded-lg" />
        </div>
        <div className="lg:w-5/12 md:w-6/12 w-full">
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2023"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar={avatar1}
            authorName="Monkey D. Luffy"
            authorJob="Front-end Engineer"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-6" />
    </div>
  );
};

export default Home;
