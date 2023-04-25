import React from "react";
import InfoPost from "./InfoPost";

const CardPost = ({ ...infoPost }) => {
  return (
    <article>
      <img src="" className="w-full rounded" alt="" />
      <InfoPost {...infoPost} />
    </article>
  );
};

export default CardPost;
