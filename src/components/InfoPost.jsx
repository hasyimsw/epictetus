import React from "react";

const InfoPost = (props) => {
  return (
    <>
      <div className="flex items-center text-white/60 gap-x-2">
        <p className="uppercase text-sm">{props.category}</p>
        &bull;
        <p className="text-sm">{props.date}</p>
      </div>
      <h2 className="text-2xl text-white mt-3 leading-9">{props.title}</h2>
      <p className="text-white/60 text-base mt-3 leading-7">
        {props.shortDescription}
      </p>
      <div className="flex items-center mt-5">
        <img src={props.authorAvatar} alt="" />
        <div className="ml-4">
          <h3 className="text-white">{props.authorName}</h3>
          <p className="text-sm text-white/60">{props.authorJob}</p>
        </div>
      </div>
    </>
  );
};

export default InfoPost;
