import React from "react";

const Details = ({title,data,icon,para}) => {
  return (
    <div className="details flex gap-7">
      <div className="icon bg-blue-200 flex justify-center items-center">
        {icon}
      </div>
      <div className="dt_right flex flex-col gap-2">
        <h3 className="text-[#3c4858] text-xl font-bold">{title}</h3>
        <p>{(para) ? para : "Start working with Me,I provide everything"}</p>
        <span className="text-blue-500">{data}</span>
      </div>
    </div>
  );
};

export default Details;
