"use client";
import React, { useEffect } from "react";
import { Main, Nachos, Taco, Smoothie, Salad } from "@/helpers/menu";
import { getMenu } from "app/lib/features/menuSlice";
import { useAppDispatch, useAppSelector } from "app/lib/hooks";
import About from "@/components/About";
import Menu from "@/components/Menu";
import tw from "twin.macro";
import Statistics from "@/components/Statistics";
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
// const tabs = {
//   Main: Main,
//   Salad: Salad,
//   Nachos: Nachos,
//   Taco: Taco,
//   Smoothie: Smoothie,
// };
export default function Dashboard() {
  const menu = useAppSelector((state) => state.menu.menu);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMenu());
  }, []);
  useEffect(() => {
    console.log(menu, "menu in useEffect");
  }, [menu]);
  return (
    <>
      <About />
      <Menu
        tabs={menu && menu}
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      />
      <Statistics />
    </>
  );
}
