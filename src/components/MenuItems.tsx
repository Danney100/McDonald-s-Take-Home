"use client";
import React from "react";
import Card from "./Card";
import { MenuItemProps } from "@/types/menuItems";

const MenuItems: React.FC<MenuItemProps> = ({ data }) => {
  return (
    <section className="flex gap-8 md:p-20 flex-wrap mx-auto p-4">
        {data?.products?.map((cardItem: any, index: number) => {
          return <Card key={index} itemData={cardItem} />;
        })}
    </section>
  );
};

export default MenuItems;
