import React from "react";
import CardPost from "../components/CardPost";
import thumbnail2 from "../assets/thumbnail-2.png";
import thumbnail3 from "../assets/thumbnail-3.png";
import thumbnail4 from "../assets/thumbnail-4.png";
import thumbnail5 from "../assets/thumbnail-5.png";
import thumbnail6 from "../assets/thumbnail-6.png";
import thumbnail7 from "../assets/thumbnail-7.png";
import author2 from "../assets/author-2.png";
import author3 from "../assets/author-3.png";
import author4 from "../assets/author-4.png";
import author5 from "../assets/author-5.png";
import author6 from "../assets/author-6.png";
import author7 from "../assets/author-7.png";

const InfoPosts = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7 mt-14">
        <div className="w-full">
          <img src={thumbnail2} alt="" className="w-full mb-5" />
          <CardPost
            category="INTERNET"
            date="June 28, 2023"
            title="How to design a product that can grow itself 10x in year"
            shortDescription="Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor."
            authorAvatar={author2}
            authorName="Roronoa Zoro"
            authorJob="Product Designer"
          />
        </div>
        <div className="w-full">
          <img src={thumbnail3} alt="" className="w-full mb-5" />
          <CardPost
            category="9 TO 5"
            date="June 22, 2023"
            title="The More Important the Work, the More Important the Rest"
            shortDescription="Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high."
            authorAvatar={author3}
            authorName="Vinsmoke Sanji"
            authorJob="Entrepreneur"
          />
        </div>
        <div className="w-full">
          <img src={thumbnail4} alt="" className="w-full mb-5" />
          <CardPost
            category="INSPIRATIONS"
            date="June 18, 2023"
            title="Email Love - Email Inspiration, Templates and Discovery"
            shortDescription="Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else."
            authorAvatar={author4}
            authorName="Nami"
            authorJob="Front-end Engineer"
          />
        </div>
        <div className="w-full">
          <img src={thumbnail5} alt="" className="w-full mb-5" />
          <CardPost
            category="9 TO 5"
            date="June 22, 2023"
            title="The More Important the Work, the More Important the Rest"
            shortDescription="The More ImSuitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high."
            authorAvatar={author5}
            authorName="Usopp"
            authorJob="Entrepreneur"
          />
        </div>
        <div className="w-full">
          <img src={thumbnail6} alt="" className="w-full mb-5" />
          <CardPost
            category="INSPIRATIONS"
            date="June 18, 2023"
            title="Email Love - Email Inspiration, Templates and Discovery"
            shortDescription="Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else."
            authorAvatar={author6}
            authorName="Tony-Tony Chopper"
            authorJob="Front-end Engineer"
          />
        </div>
        <div className="w-full">
          <img src={thumbnail7} alt="" className="w-full mb-5" />
          <CardPost
            category="INTERNET"
            date="June 28, 2023"
            title="How to design a product that can grow itself 10x in year"
            shortDescription="Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor."
            authorAvatar={author7}
            authorName="Nico Robin"
            authorJob="Product Designer"
          />
        </div>
      </div>
    </>
  );
};

export default InfoPosts;
