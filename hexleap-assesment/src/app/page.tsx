"use client";

import SportCard from ".//page/card";
import { players } from "../data";
import { collections } from "../data";
import Image from "next/image";
import CollectionCard from ".//page/collectionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export default function Home() {
  let [collection, setCollection] = useState(collections);
  let [startIndex, setStartIndex] = useState(0);
  let [darkMode, setDarkMode] = useState(true);

  const previous = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  const next = () => {
    if (startIndex + 3 < collection.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <main
      className={
        darkMode ? "bg-[#292B33] px-16 py-10" : "bg-[#F7F7F8] px-16 py-10"
      }
    >
      <div className=" mb-4 ">
        <div className=" flex justify-between">
          <h2
            className={
              darkMode
                ? "mb-2 border-b-2 border-blue-600 w-16 text-white font-bold text-xl"
                : "mb-2 border-b-2 border-blue-600 w-16 text-black font-bold text-xl"
            }
          >
            Sports
          </h2>
          <div onClick={changeMode}>
            {darkMode ? (
              <FontAwesomeIcon
                icon={faSun}
                style={{ color: "#2B9CF0", fontSize: "25px" }}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                style={{ color: "#2B9CF0", fontSize: "25px" }}
              ></FontAwesomeIcon>
            )}
          </div>
        </div>
        <div className="flex justify-between">
          {players.map((player: any, i: any) => (
            <SportCard player={player} key={i} darkMode={darkMode} />
          ))}
          <div className={
        darkMode ? "bg-[#3B3E47] w-72 p-2" : "bg-[#FFFFFF] w-72 p-2 "
      }>
            <div>
              <Image src="/ad.png" width={270} height={100} alt="#" />
              <p className="relative  bottom-[271px] left-[230px] bg-[#040404] text-white w-10 px-2 ">
                Ad
              </p>
            </div>

            <h3 className={
        darkMode ? "text-center text-white text-2xl font-sans font-semibold" : "text-center text-black text-2xl font-sans font-semibold"
      }>
              Advertisement title
            </h3>
            <p className={darkMode ? "text-center text-white mt-4 text-m" : "text-center text-black mt-4 text-m"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adolorum
              quas, expedita voluptatibus, obcaecati quos eveniet, fugit quia
              saepe eum nisi ex mollitia itaque labore error mollitia itaque
              labore error.
            </p>
          </div>
        </div>
        <div className=" items-center flex justify-center ">
          <button className=" bg-[#2B9CF0] py-2 px-4 text-white rounded mt-14 mb-4">
            {" "}
            See More
          </button>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "bg-gradient-to-b from-[#17282A] to-[#221A2C] bg-no-repeat pt-16"
            : "bg-gradient-to-b from-[#F8F8FF] to-[#F8F8FF] bg-no-repeat pt-16"
        }
      >
        <h1
          className={
            darkMode
              ? "text-center text-white text-6xl font-bold"
              : "text-center text-black text-6xl font-bold"
          }
        >
          {" "}
          Collection Spotlight
        </h1>
        <div className="t items-center flex justify-center">
          <p
            className={
              darkMode
                ? "text-center  w-[50%] mt-6 text-white text-sm"
                : "text-center  w-[50%] mt-6 text-black text-sm"
            }
          >
            {" "}
            Discover extraordinary moments with our Spotlight collection
            metatickets--exclusive accessto premium events for an unforgerttable
            experience. Grab yours today!{" "}
          </p>
        </div>
        <div className=" flex justify-around w-[100%] ">
          <div className="flex flex-row items-center ">
            <div className="border border-[#2B9CF0] p-2" onClick={previous}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ color: "#2B9CF0", fontSize: "25px" }}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className="flex justify-between w-[60%]  ">
            {collection
              .slice(startIndex, startIndex + 3)
              .map((collection: any, i: any) => (
                <CollectionCard collection={collection} key={i} darkMode={darkMode} />
              ))}
          </div>
          <div className="flex flex-row items-center ">
            <div className="border border-[#2B9CF0] p-2" onClick={next}>
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: "#2B9CF0", fontSize: "25px" }}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
