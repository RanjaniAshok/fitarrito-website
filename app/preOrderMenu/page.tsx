"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { getPreOrderMenu } from "app/lib/features/menuSlice";
import NutrientCalculator from "@/components/NutrientCalculator";
// import MenuCategories from "@/components/ChooseMenuType";
import tw from "twin.macro";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "app/lib/hooks";
import DisplayTabContent from "@/components/DisplayTabContent";
import { Header, HeaderRow } from "@/components/misc/Header";
import LoaderText from "@/components/ImageSkeleton";

interface TabControlProps {
  active: string; // Adjust the type as needed
}
interface dataProps {
  cals: string;
  protein: string;
  fat: string;
  carbs: string;
}
const TabControl = styled.div<TabControlProps>`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) =>
    props["active"] === "true" ? tw`bg-primary-500! text-gray-100!` : ""}
`;
const TabContent = tw(
  motion.div
)`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full px-2`;
const Container = tw.div`relative mt-16`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const SubHeading = tw.h1`font-black text-lg text-gray-600 md:text-2xl mx-auto leading-snug text-center mt-5`;

const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
export default function PreOrdermenu() {
  const menu = useAppSelector((state) => state.menu.preOrderMenu);
  const tabsKeys = menu ? Object.keys(menu) : [];
  const [activeTab, setActiveTab] = useState(tabsKeys[0] || "");
  const [loading, setLoading] = useState(false);
  const [nutrientData, setNutrientData] = useState<dataProps>({
    cals: "00",
    protein: "00",
    fat: "00",
    carbs: "00",
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPreOrderMenu());
  }, [dispatch]);

  const handleTabChange = (tabName: string) => {
    setLoading(true); // Start loading
    setActiveTab(tabName);
    setTimeout(() => {
      setLoading(false); // Stop loading after content update
    }, 1000); // Adjust delay as needed
  };
  return (
    <Container>
      {/* <MenuCategories /> */}
      <NutrientCalculator data={nutrientData} />
      <div className="container mx-auto p-6">
        <HeaderRow>
          <Header>
            Select Your <HighlightedText>meal.</HighlightedText>
          </Header>
          <TabsControl>
            {Object.entries(menu).map(([tabName], index) => (
              <TabControl
                key={index}
                active={activeTab === tabName ? "true" : "false"}
                onClick={() => handleTabChange(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        <SubHeading>Order in advance and enjoy your favorite meals!</SubHeading>
        <TabContent className="mx-auto">
          {loading ? (
            <LoaderText />
          ) : (
            <>
              {/* Render individual tab items */}
              {menu[activeTab]?.length > 0 ? (
                Object.entries(menu[activeTab]).map(([index, card]) => (
                  <DisplayTabContent
                    card={card}
                    index={parseInt(index)}
                    key={card.title}
                    setNutrientData={setNutrientData}
                    onHover={() =>
                      setNutrientData({
                        cals: card.nutrient?.mini.cals || "00",
                        protein: card.nutrient?.mini.protein || "00",
                        fat: card.nutrient?.mini.fat || "00",
                        carbs: card.nutrient?.mini.carbs || "00",
                      })
                    }
                  />
                ))
              ) : (
                <LoaderText />
              )}
            </>
          )}
        </TabContent>
      </div>
    </Container>
  );
}
