"use client";
import React from "react";
import { Main, Nachos, Taco, Smoothie, Salad } from "@/helpers/menu";

import About from "@/components/About";
import Menu from "@/components/Menu";
import tw from "twin.macro";
import Statistics from "@/components/Statistics";
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const tabs = {
  Main: Main,
  Salad: Salad,

  Nachos: Nachos,
  Taco: Taco,
  Smoothie: Smoothie,
};
export default function Dashboard() {
  return (
    <>
      <About />
      <Menu
        tabs={tabs}
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
