"use client";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "motion/react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for navigation

import { Container } from "@/components/misc/Layout";
import { addItemsToCart } from "app/lib/features/cartSlice";
import { setSelectedMenu } from "app/lib/features/menuSlice";
import ChooseVariantCard from "./ChooseVariantCard";
import { useAppSelector, useAppDispatch } from "app/lib/hooks";
interface CardImageContainerProps {
  imagesrc: { src: string }; // Adjust the type as needed
}
interface Card {
  // Define the structure of a card
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

  // Add other card properties here
}
const CardContainer = tw.div`w-full sm:w-auto flex-shrink-0 mt-10`;
const Card = tw(
  motion.div
)`bg-gray-200 rounded-b mx-auto sm:max-w-none sm:mx-0`;

const CardImageContainer = styled.div<CardImageContainerProps>`
  background: url(${(props) => props.imagesrc.src}) no-repeat top center;
  ${tw`h-32 sm:h-56 xl:h-64 w-full bg-center bg-cover relative rounded-t`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 justify-center items-center xs:hidden sm:flex`}
`;
const CardButton = tw.div`text-sm m-1 xs:text-xs xs:px-8 px-2
 py-3 font-bold rounded bg-customTheme text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-sm focus:outline-none transition duration-300`;

const CardText = tw.div`w-full p-4 text-gray-900 flex flex-col justify-between bg-gray-100`;
const CardTitle = tw.h5`text-sm sm:text-base font-semibold group-hover:text-primary-500 mb-2`;
const CardPrice = tw.p`text-sm sm:text-sm`;

const CardBuyButton = tw.div`flex items-center mt-4 sm:hidden`;
// const DecoratorBlob2 = styled.div`
//   ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-60 text-primary-500`}
// `;
const DisplayTabContent: React.FC<{
  card: Card;
  index: number;
  setNutrientData?: (data: {
    cals: string;
    protein: string;
    fat: string;
    carbs: string;
  }) => void; // ✅ Correct type
  onHover?: () => void;
  quantity?: number | undefined;
  isDrawerOpen?: () => void | undefined;
  openModal?: (card: Card) => void | undefined;
}> = ({
  card,
  index,
  openModal,
  quantity,
  isDrawerOpen,
  setNutrientData,
  onHover,
}) => {
  const dispatch = useAppDispatch();
  const menuType = useAppSelector((state) => state.menu.menuType);
  const router = useRouter();
  return (
    <CardContainer
      key={`${card.title}-${index}`}
      onMouseEnter={onHover}
      onMouseLeave={
        () =>
          setNutrientData?.({
            cals: "00",
            protein: "00",
            fat: "00",
            carbs: "00",
          }) // Reset when unhovered
      }
    >
      <Card
        className="group"
        animate={"rest"}
        initial="rest"
        whileHover="hover"
      >
        <Container>
          <CardImageContainer imagesrc={card.imagesrc}>
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
              {menuType === "restaurant" ? (
                <CardButton
                  onClick={async () => {
                    const { meta } = await dispatch(
                      addItemsToCart({ ...card, quantity: quantity ?? 0 })
                    );
                    if (meta.requestStatus === "fulfilled") {
                      isDrawerOpen?.(); // ✅ Safe function call
                    }
                  }}
                >
                  Add to cart
                </CardButton>
              ) : (
                <CardButton
                  onClick={async () => {
                    dispatch(setSelectedMenu(card));
                    const encodedName = encodeURIComponent(card.title);
                    router.push(`/preOrderMenu/${encodedName}`); // ✅ Navigate to the specific item page
                  }}
                >
                  {card.title}
                </CardButton>
              )}
            </CardHoverOverlay>
          </CardImageContainer>
        </Container>

        {menuType === "restaurant" ? (
          <CardText>
            <CardTitle>{card.title}</CardTitle>
            <CardPrice>Rs.{card.price}</CardPrice>
            <ChooseVariantCard item={card} />

            <CardBuyButton>
              {menuType === "restaurant" ? (
                <CardButton onClick={() => openModal?.(card)}>
                  Add to cart
                </CardButton>
              ) : null}
            </CardBuyButton>
          </CardText>
        ) : null}
      </Card>
    </CardContainer>
  );
};
export default DisplayTabContent;
