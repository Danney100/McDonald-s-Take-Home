"use client";
import React from "react";
import Header from "../common/Header";
import Card from "./Card";
import { MenuItemProps } from "@/types/menuItems";

const MenuItems: React.FC<MenuItemProps> = ({ data }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Header />
        <section className="flex gap-8 p-20 flex-wrap">
          {data?.products?.map((cardItem: any, index: number) => {
            return <Card key={index} itemData={cardItem} />;
          })}
        </section>
      </body>
    </html>
  );
};

export default MenuItems;
