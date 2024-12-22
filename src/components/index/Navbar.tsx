"use client";
import Image from "next/image";
import { GetStartedBtn } from "../sharedui/Buttonui";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 2);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const url =
    "https://static.wixstatic.com/media/632794_3ab38eb69bed4b2fbb2b136406873599~mv2.png/v1/fill/w_59,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Galini%20Logo%20Black.png";
  return (
    <nav
      className={`z-20 fixed bg-white shadow-md top-0 w-full flex justify-between transition-shadow duration-700 ${scroll ? "shadow-lg" : ""}`}
    >
      <div className="m-2 flex flex-row gap-2 ">
        <div className=" min-w-10 md:min-w-14">
          <Image
            src={url}
            width={60}
            height={70}
            alt="galini_logo"
            className="w-10 md:w-14"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl mt-1 md:mt-2">Galini </h1>
        </div>
      </div>

      <div className="m-1 mt-3 flex gap-5">
        <div className="m-1 mt-3">
          <h3 className=" text-md">pricing</h3>
        </div>

        <div>
          <GetStartedBtn />
        </div>
      </div>
    </nav>
  );
}
