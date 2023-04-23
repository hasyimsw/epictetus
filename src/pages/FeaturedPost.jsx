import React from "react";
import FeaturedThumbnail from "../assets/featured-thumbnail.png";
import Author1 from "../assets/author-1.jpg";

const Home = () => {
  return (
    <div className="max-w-[1080px] mx-auto mt-14">
      <div className="flex items-center gap-x-7">
        <div className="w-8/12">
          <img src={FeaturedThumbnail} alt="" className="rounded-lg" />
        </div>
        <div className="w-4/12">
          <div className="flex items-center text-white/60 gap-x-3">
            <p className="uppercase text-sm">UI Design</p>
            &bull;
            <p className="text-sm">July 2, 2023</p>
          </div>
          <h2 className="text-2xl text-white mt-3 leading-9">
            Understanding color theory: the color wheel and finding
            complementary colors
          </h2>
          <p className="text-white/60 text-base mt-3 w-10/12 leading-7">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </p>
          <div className="flex items-center mt-5">
            <img src={Author1} alt="" />
            <div className="ml-4">
              <h3 className="text-white">Monkey D. Luffy</h3>
              <p className="text-sm text-white/60">UI Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
