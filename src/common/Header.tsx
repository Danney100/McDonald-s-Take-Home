"use client";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="py-8 px-16 flex justify-between ">
      <div className="flex gap-2">
        <span className="text-green-400 font-bold text-2xl">Burger</span>
        <Image src={"/home.svg"} width={20} height={20} alt="home" />
      </div>
      <div>
        <Image src={"/cart.svg"} width={20} height={20} alt="cart" />
      </div>
    </nav>
  );
};

export default Header;
