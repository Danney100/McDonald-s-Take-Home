"use client";
import { Burger } from "@/types/menuItems";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type CardProps = {
  itemData: Burger;
};

const Card: React.FC<CardProps> = ({ itemData }) => {
  // const router = useRouter();
  console.log("🚀 ~ itemData:", itemData);
  return (
    <div
      className="max-w-sm bg-slate-950 border cursor-pointer rounded-lg flex flex-col gap-4 items-start justify-between"
      // onClick={() => router.push(`/product-detail/${itemData?.id}`)}
    >
      <Image
        width={200}
        height={200}
        className="rounded-t-lg"
        src={itemData?.image}
        alt={"itemData?.name"}
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {itemData?.name}
          </h5>
        </a>
        <p className="mb-3 font-normal ">{itemData?.description}</p>
        <p className="mb-3 font-normal">${itemData?.price}</p>
      </div>
    </div>
  );
};

export default Card;
