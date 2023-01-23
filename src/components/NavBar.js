import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logo, setLogo] = useState("/white-logo.png");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setLogo("/logo.png");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setLogo("/white-logo.png");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-200"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white ">
        <Link href="/" className="flex items-center">
          <Image src={`${logo}`} alt="Logo image" width={50} height={50} />
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-3xl ml-6 tracking-widest"
          >
            SEYGOB
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          {/* <li className="p-4 font-semibold text-lg hover:text-yellow-400">
            <Link href="/">Nuestro trabajo</Link>
          </li> */}
          <li className="p-4 font-bold text-xl  hover:text-amber-500">
            <Link href="/soluciones">Soluciones</Link>
          </li>
          <li className="p-4 font-bold text-xl  hover:text-amber-500">
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "black" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
          }
        >
          <ul>
            {/* <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-400"
            >
              <Link href="/">Nuestro trabajo</Link>
            </li> */}
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-400"
            >
              <Link href="/soluciones">Soluciones</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-400"
            >
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
