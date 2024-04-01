import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function SportCard( { darkMode, player }: any) {
  return (
    <div
      className={darkMode ? "bg-[#3B3E47] w-72  p-2" : "bg-[#FFFFFF] w-72  p-2"}
    >
      <Image
        src={`/${player.avatarUrl}`}
        width={280}
        height={150}
        alt="#"
      />
      <h3 className=" text-white text-bold text-xl my-4">
        {player.name}
      </h3>
      <div
        className={
          darkMode
            ? "flex bg-[#292B33] justify-between  px-4 py-2"
            : "flex bg-[#F7F7F8] justify-between  px-4 py-2"
        }
      >
        <div>
          <p
            className={
              darkMode ? "text-white text-sm" : "text-[#A4A4AE] text-sm"
            }
          >
            Total Events{" "}
          </p>
          <p className={darkMode ? "text-white text-sm" : "text-black text-md"}>
            {" "}
            {player.totalEvents}{" "}
          </p>
        </div>
        <div>
          <p
            className={
              darkMode ? "text-white text-sm" : "text-[#A4A4AE] text-sm"
            }
          >
            Sports{" "}
          </p>
          <p className={darkMode ? "text-white text-sm" : "text-blacktext-md"}>
            {" "}
            {player.sport}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
