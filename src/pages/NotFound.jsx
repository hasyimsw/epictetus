import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-[1080px] mx-auto px-4 text-white h-auto py-44 text-center">
      <h1 className="text-7xl">No result 😥</h1>
      <p className="w-full lg:w-6/12 mx-auto mt-5">
        We couldn't find any posts with the keyword `yahahahayuk`. Please try
        another keyword.
      </p>
    </div>
  );
};

export default NotFound;
