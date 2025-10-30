import React from "react";
import { Link } from "react-router-dom";

const InfoItem = ({item}) => {
  return (
    <>
      <div className="bg-[#f5f7fa] w-[16rem] sm:w-[22rem] p-4 h-[12rem] my-3 flex flex-col  justify-evenly animate-float">
      <Link to={item.link}><h3 className="text-xl font-bold hover:text-yellow-500">{item.heading}</h3></Link>
        <p className="text-[16px] text-gray-500 leading-6">{item.para}</p>
      </div>
    </>
  );
};

export default InfoItem;
