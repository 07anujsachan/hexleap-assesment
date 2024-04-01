"use client";

import {
  faChevronLeft,
  faChevronRight,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { collections, players } from "../data";
import SportCard from ".//page/card";
import CollectionCard from ".//page/collectionCard";

export default function Home() {
  let [collection, setCollection] = useState(collections);
  let [startIndex, setStartIndex] = useState(0);
  let [darkMode, setDarkMode] = useState(true);
  let [noOfCardsVisible, setNoOfCardsVisible] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.screen.width <= 650) {
        setNoOfCardsVisible(1);
      } else if (window.innerWidth <= 1024) {
        setNoOfCardsVisible(2);
      } else {
        setNoOfCardsVisible(3);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {players.map((player: any, i: any) => (
            <SportCard player={player} key={i} darkMode={darkMode} />
          ))}
          <div
            className={darkMode ? "bg-[#3B3E47] p-2" : "bg-[#FFFFFF] w-72 p-2 "}
          >
            <div>
              <img src="/ad.png" alt="#" className="w-full" />
              <p className="hidden lg:block relative left-28 bottom-40 xl:left-48 xl:bottom-56 2xl:left-52 2xl:bottom-60 bg-[#040404] text-white w-10 px-2 ">
                Ad
              </p>
            </div>

            <h3
              className={
                darkMode
                  ? "text-center text-white text-2xl font-sans font-semibold"
                  : "text-center text-black text-2xl font-sans font-semibold"
              }
            >
              Advertisement title
            </h3>
            <p
              className={
                darkMode
                  ? "text-center text-white mt-4 text-m"
                  : "text-center text-black mt-4 text-m"
              }
            >
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
          <div className="flex justify-between">
            {collection
              .slice(startIndex, startIndex + noOfCardsVisible)
              .map((collection: any, i: any) => (
                <CollectionCard
                  collection={collection}
                  key={i}
                  darkMode={darkMode}
                />
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