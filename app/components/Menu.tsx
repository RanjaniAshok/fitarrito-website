"use client";
import React, { ReactNode, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import { Container, ContentWithPaddingXl } from "@/components/misc/Layout";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import icons
import LoaderText from "@/components/ImageSkeleton";
import { SectionHeading } from "@/components/misc/Heading";
import SvgDecoratorBlob2 from "@/images/svg-decorator-blob-7.svg";
import Image from "next/image";
import CartModal from "./CartModal"; // Import modal
import tw from "twin.macro";
import Modal from "react-modal";

// Set the Next.js root element

interface Card {
  // Define the structure of a card
  imagesrc: { src: string };
  title: string;
  content: string;
  price: number | string;
  rating: number | string;
  reviews: string;
  url: string;
  // Add other card properties here
}

type Tabs = {
  [key: string]: Card[]; // Keys are strings, values are arrays of `Card`
};
interface MenuProps {
  heading: ReactNode;
  tabs: Tabs;
}
interface CardImageContainerProps {
  imagesrc: { src: string }; // Adjust the type as needed
}
interface TabControlProps {
  active: string; // Adjust the type as needed
}

const Header = tw(SectionHeading)``;

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
)`flex overflow-x-auto scroll-mr-0 scroll-smooth snap-x snap-mandatory max-w-full relative px-2 sm:px-8`;
const CardContainer = tw.div`flex-shrink-0 mt-10 sm:pr-10 md:pr-6 lg:pr-8 xs:pr-10 snap-start`;
const Card = tw(
  motion.div
)`bg-gray-200 rounded-b mx-auto sm:max-w-none sm:mx-0`;

const CardImageContainer = styled.div<CardImageContainerProps>`
  background: url(${(props) => props.imagesrc.src}) no-repeat top center;
  ${tw`h-56 xl:h-64 w-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm xs:text-xs font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 justify-center items-center xs:hidden sm:flex`}
`;
const CardButton = tw.div`text-sm px-8 py-3 font-bold rounded bg-customTheme text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-sm focus:outline-none transition duration-300`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-base font-semibold group-hover:text-primary-500 xs:text-xs`;
const CardContent = tw.p`mt-1 text-base xs:text-xxs font-medium text-gray-600`;
const CardPrice = tw.p`text-xl font-bold`;
const CardBuyButton = tw.div`flex flex-row items-center justify-between mt-4 sm:hidden`;

const DecoratorBlob2 = styled.div`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-60 text-primary-500`}
`;

export default function Menu({ heading, tabs }: MenuProps) {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: string) => {
    if (!scrollRef.current) return; // Prevent accessing null

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Scroll left
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right
    }
  };
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const openModal = (card: Card) => {
    setSelectedCard(card);
    setQuantity(1); // ✅ Reset quantity to 1 when opening for a new card
    setModalOpen(true);
  };
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    setActiveTab(tabsKeys[0]);
  }, [tabs]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const nextRoot = document.getElementById("__next");
      if (nextRoot) {
        Modal.setAppElement("#__next");
      }
    }
  }, []);
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName ? "true" : "false"}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>
        <div className="relative flex items-center">
          <FiChevronLeft
            size={32}
            onClick={() => scroll("left")}
            className="absolute -left-10 sm:left-0 top-1/2 transform -translate-y-1/2 z-5 
            bg-customTheme text-white p-2 rounded-full shadow-lg hover:bg-red-500"
          />
          <TabContent ref={scrollRef} className="sm:w-[85%] mx-auto">
            {tabs[activeTab]?.length > 0 ? (
              tabs[activeTab].map((card, index) => (
                <CardContainer key={index}>
                  <Card
                    className="group"
                    animate={"rest"}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Container>
                      <CardImageContainer imagesrc={card.imagesrc}>
                        <CardRatingContainer>
                          <CardRating>
                            <FaStar />
                            {card.rating}
                          </CardRating>
                          <CardReview>({card.reviews})</CardReview>
                        </CardRatingContainer>
                        <CardHoverOverlay
                          variants={{
                            hover: {
                              opacity: 1,
                              height: "auto",
                            },

                            rest: {
                              opacity: 0,
                              height: 0,
                            },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardButton onClick={() => openModal(card)}>
                            Buy Now
                          </CardButton>
                        </CardHoverOverlay>
                      </CardImageContainer>
                    </Container>

                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardContent>{card.content}</CardContent>
                      <CardBuyButton>
                        <CardPrice>{card.price}</CardPrice>
                        <CardButton onClick={() => openModal(card)}>
                          Buy Now
                        </CardButton>
                      </CardBuyButton>
                    </CardText>
                  </Card>
                </CardContainer>
              ))
            ) : (
              <LoaderText />
            )}
          </TabContent>

          <FiChevronRight
            size={32}
            onClick={() => scroll("right")}
            className="absolute -right-10 sm:right-0 top-1/2 transform -translate-y-1/2 z-5 
            bg-customTheme text-white p-2 rounded-full shadow-lg hover:bg-red-500"
          />
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
    </Container>
  );
}
