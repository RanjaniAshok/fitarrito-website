"use client";
import React, { ReactNode, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { useAppDispatch, useAppSelector } from "app/lib/hooks";

import { Container, ContentWithPaddingXl } from "@/components/misc/Layout";
import LoaderText from "@/components/ImageSkeleton";
import { SectionHeading } from "@/components/misc/Heading";
import SvgDecoratorBlob2 from "@/images/svg-decorator-blob-7.svg";
import Image from "next/image";
import CartModal from "./CartModal"; // Import modal
import tw from "twin.macro";
import Modal from "react-modal";
import CartDrawer from "@/components/CartDrawer";
import DisplayTabContent from "@/components/DisplayTabContent";
import { getMenu } from "app/lib/features/menuSlice";

interface Card {
  imagesrc: { src: string };
  title: string;
  content: string;
  price: number | string;
  rating: number | string;
  reviews: string;
  url: string;
  category?: string;
  nutrient?: {
    mini: { cals: string; protein: string; fat: string; carbs: string };
    regular: { cals: string; protein: string; fat: string; carbs: string };
  };
}

type Tabs = {
  [key: string]: Card[]; // Keys are strings, values are arrays of `Card`
};
interface MenuProps {
  heading: ReactNode;
  tabs: Tabs;
}

interface TabControlProps {
  active: string; // Adjust the type as needed
}

const Header = tw(SectionHeading)``;
const DecoratorBlob2 = styled.div`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-60 text-primary-500`}
`;
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
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

export default function Menu({ heading, tabs }: MenuProps) {
  const tabsKeys = Object.keys(tabs);
  const menuType = useAppSelector((state) => state.menu.menuType);
  const [activeTab, setActiveTab] = useState(tabsKeys[0] || "");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleTabChange = (tabName: string) => {
    setLoading(true);
    setActiveTab(tabName);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const openModal = (card: Card) => {
    setSelectedCard(card);
    setQuantity(1);
    setModalOpen(true);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const nextRoot = document.getElementById("__next");
      if (nextRoot) {
        Modal.setAppElement("#__next");
      }
    }
  }, []);
  useEffect(() => {
    if (tabsKeys.length > 0) {
      setActiveTab(tabsKeys[0]); // Set the first tab as active
    }
  }, [menuType]);
  useEffect(() => {
    if (tabsKeys.length > 0 && !activeTab) {
      setActiveTab(tabsKeys[0]); // Set the first tab as active
    }
  }, [tabsKeys, activeTab]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.entries(tabs).map(([tabName], index) => (
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
        <div className="relative flex items-center">
          <TabContent ref={scrollRef} className="mx-auto">
            {loading ? (
              <LoaderText />
            ) : (
              <>
                {tabs[activeTab]?.length > 0 ? (
                  Object.entries(tabs[activeTab]).map(([index, card]) => (
                    <DisplayTabContent
                      card={card}
                      isDrawerOpen={() => setIsDrawerOpen(true)}
                      openModal={openModal}
                      quantity={quantity}
                      index={parseInt(index)}
                      key={card.title}
                    />
                  ))
                ) : (
                  <LoaderText />
                )}
              </>
            )}
          </TabContent>
        </div>
      </ContentWithPaddingXl>

      <DecoratorBlob2>
        <Image src={SvgDecoratorBlob2} alt="Blob-Logo" />
      </DecoratorBlob2>
      <CartModal
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        selectedCard={selectedCard}
        quantity={quantity}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      {isDrawerOpen ? (
        <CartDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      ) : null}
    </Container>
  );
}
