"use client";
import { useAppSelector } from "@/store/hooks";
import { Badge } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const totalCartItems = useAppSelector((store) => store.cart.totalQuantity);
  const router = useRouter();
  return (
    <nav className="py-8 px-16 flex justify-between ">
      <div className="flex gap-2 cursor-pointer" onClick={() => router.push("/")}>
        <span className="text-green-400 font-bold text-2xl">Burger</span>
        <Image src={"/home.svg"} width={25} height={25} alt="home" />
      </div>
      <div
        className="flex cursor-pointer"
        onClick={() => router.push("/shopping-cart")}
      >
        <Image src={"/cart.svg"} width={25} height={25} alt="cart" />
        <Badge color={"success"} className="rounded-full" size={"xs"}>
          {totalCartItems || 0}
        </Badge>
      </div>
    </nav>
  );
};

export default Header;
