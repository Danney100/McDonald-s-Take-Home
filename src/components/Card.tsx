"use client";
import { Burger } from "@/types/menuItems";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type CardProps = {
  itemData: Burger;
};

const Card: React.FC<CardProps> = ({ itemData }) => {
  const router = useRouter();
  return (
    <div
      className="sm:max-w-full lg:max-w-sm bg-slate-950 h-[33rem] border cursor-pointer rounded-lg flex flex-col gap-2 items-start justify-between"
      onClick={() => router.push(`/product-detail/${itemData?.id}`)}
    >
      <div className="relative w-full h-full max-h-80">
        <Image
          fill
          style={{ objectFit: "cover" }}
          sizes="100%"
          className="rounded-t-lg"
          src={itemData?.image}
          alt={"itemData?.name"}
        />
      </div>
      <div className="px-4 py-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {itemData?.name}
        </h5>
        <p className="mb-3 text-gray-400 font-bold">${itemData?.price}</p>
        <p className="mb-3 font-normal ">{itemData?.description}</p>
      </div>
    </div>
  );
};

export default Card;
