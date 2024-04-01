import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function CollectionCard({darkMode, collection }: any) {
  return (
    <div
      className={
        darkMode
          ? "bg-[#3B3E47] p-2  m-4 mt-24 text-center"
          : "bg-[#FFFFFF] p-2  m-4 mt-24 text-center"
      }
    >
      <div className="w-[257px] h-[350px]">
        <Image src={`/${collection.image}`} width={260} height={150} alt="" />
      </div>
    
      <div
        className={
          darkMode
            ? "w-[20px] h-[20px] rounded-lg bg-[#201D2B] relative top-7 right-5"
            : "w-[20px] h-[20px] rounded-lg bg-[#F8F8ff] relative top-7 right-5"
        }
      ></div>
      <div className="border-dashed border-[#707782]  ml-3 border-[1px] mt-4 items-center flex justify-center w-[90%] mb-7">
        {" "}
      </div>
      <div
        className={
          darkMode
            ? "w-[20px] h-[20px] rounded-lg bg-[#201D2B] relative bottom-9 left-[255px]"
            : "w-[20px] h-[20px] rounded-lg bg-[#F8F8ff] relative bottom-9 left-[255px]"
        }
      ></div>
      <h3 className={darkMode ? "text-white text-xl" : "text-black text-xl"}>
        {collection.name}
      </h3>
      <p
        className={
          darkMode
            ? " text-sm my-2 text-[#e6e4e4]"
            : " text-sm my-2 text-[#000000]"
        }
      >
        {" "}
        <span>{collection.date}</span> | <span>{collection.day}</span> |{" "}
        <span>{collection.time}</span>{" "}
      </p>
      <p
        className={
          darkMode ? "text-[#e6e4e4] text-sm" : "text-[#656464] text-sm"
        }
      >
        {collection.location}
      </p>
      <p className="bg-[#000000]  text-center text-white mt-4   p-1">
        {" "}
        Take Flight Collection
      </p>
    </div>
  );
}
