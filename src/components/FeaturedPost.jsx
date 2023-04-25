import React from "react";
import FeaturedThumbnail from "../assets/featured-thumbnail.png";
import InfoPost from "./InfoPost";
import avatar1 from "../assets/author-1.jpg";

const Home = () => {
  return (
    <div className="max-w-[1080px] mx-auto mt-14">
      <div className="flex items-center gap-x-7">
        <div className="w-8/12">
          <img src={FeaturedThumbnail} alt="" className="rounded-lg" />
        </div>
        <div className="w-4/12">
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
    </div>
  );
};

export default Home;
