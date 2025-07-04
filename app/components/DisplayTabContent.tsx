"use client";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "motion/react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for navigation
import Image from "next/image";

import { Container } from "@/components/misc/Layout";
import { addItemsToCart } from "app/lib/features/cartSlice";
import { setSelectedMenu } from "app/lib/features/menuSlice";
import ChooseVariantCard from "./ChooseVariantCard";
import { useAppSelector, useAppDispatch } from "app/lib/hooks";
import { PreOrderMenuItem } from "app/types/types";
// interface CardImageContainerProps {
//   imagesrc: { src: string }; // Adjust the type as needed
// }

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
    regular: {
      cals: string;
      protein: string;
      fat: string;
      carbs: string;
      price: string;
    };
    jumbo: {
      cals: string;
      protein: string;
      fat: string;
      carbs: string;
      price: string;
    };
  };

  // Add other card properties here
}
const CardContainer = tw.div`w-full sm:w-auto flex-shrink-0 mt-10`;
const Card = tw(
  motion.div
)`bg-gray-200 rounded-b mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = tw.div`relative h-32 sm:h-56 xl:h-64 w-full bg-gray-200 rounded-t overflow-hidden`;

// const CardImageContainer = styled.div<CardImageContainerProps>`
//   background: url(${(props) => props.imagesrc.src}) no-repeat top center;
//   ${tw`h-32 sm:h-56 xl:h-72 w-full bg-center bg-cover relative rounded-t`}
// `;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 justify-center items-center xs:hidden sm:flex`}
`;
const CardButton = tw.div`truncate text-ellipsis text-sm xs:text-xs xs:px-2 px-8 mx-auto
 py-3 font-bold rounded bg-customTheme text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-sm focus:outline-none transition duration-300`;
// const CardInfo = tw.div`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-2 bg-gray-300 rounded-lg`;

const CardText = tw.div`w-full p-4 text-gray-900 flex flex-col justify-between bg-gray-100`;
const CardTitle = tw.h5`text-sm sm:text-base font-semibold group-hover:text-primary-500 mb-2`;

const CardBuyButton = tw.div`flex items-center mt-4 sm:hidden`;
// const DecoratorBlob2 = styled.div`
//   ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-60 text-primary-500`}
// `;
const DisplayTabContent: React.FC<{
  card?: Card;
  selectedPreOrderMenu?: PreOrderMenuItem | null | undefined;
  index: number;
  setNutrientData?: (data: {
    cals: number;
    protein: number;
    fat: number;
    carbs: number;
  }) => void; // ✅ Correct type
  onHover?: () => void;
  quantity?: number | undefined;
  isDrawerOpen?: () => void | undefined;
  openModal?: (card: Card) => void | undefined;
}> = ({
  card,
  selectedPreOrderMenu,
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
  const renderCardButton = () => {
    switch (menuType) {
      case "restaurant":
        return <CardButton>Add to cart</CardButton>;
      case "preOrder":
        return <CardButton>{selectedPreOrderMenu?.title}</CardButton>;
      case "subscription":
        return <CardButton>More Info</CardButton>;
      default:
        return <CardButton>Unknown Menu</CardButton>;
    }
  };
  // function NutrientBadge({ label, value }: { label: string; value: string }) {
  //   return (
  //     <div className="text-center">
  //       <p className="text-gray-500 text-sm font-bold">{label}</p>
  //       <p className="text-green-700 font-bold text-xs">{value}</p>
  //     </div>
  //   );
  // }
  return (
    <CardContainer
      key={`${card?.title}-${index}`}
      onMouseEnter={onHover}
      onMouseLeave={
        () =>
          setNutrientData?.({
            cals: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
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
          <CardImageContainer
          // imagesrc={
          //   card?.imagesrc ??
          //   selectedPreOrderMenu?.imagesrc ?? { src: "/fallback-image.jpg" }
          // }
          >
            <Image
              src={
                card?.imagesrc?.src ??
                selectedPreOrderMenu?.imagesrc?.src ??
                "/fallback-image.jpg"
              }
              alt={card?.title ?? "Menu image"}
              fill
              className="object-cover rounded-t"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />

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
              onClick={async () => {
                if (menuType === "restaurant") {
                  if (!card) return;

                  const { meta } = await dispatch(
                    addItemsToCart({
                      ...card, // Spread the card object to match Item's structure
                      quantity: quantity ?? 0,
                    })
                  );
                  if (meta.requestStatus === "fulfilled") {
                    isDrawerOpen?.();
                  }
                } else if (menuType === "subscription") {
                  router.refresh?.();
                } else {
                  dispatch(setSelectedMenu(selectedPreOrderMenu));
                  const encodedName = encodeURIComponent(
                    selectedPreOrderMenu?.title ?? ""
                  );
                  router.push(`/preOrderMenu/${encodedName}`);
                }
              }}
            >
              {renderCardButton()}
            </CardHoverOverlay>
          </CardImageContainer>
        </Container>

        {menuType === "restaurant" || "susubscription" ? (
          <CardText>
            <CardTitle>{card?.title}</CardTitle>

            <ChooseVariantCard item={card || null} />

            {menuType === "restaurant" ? (
              <CardBuyButton>
                <CardButton
                  onClick={() => {
                    if (!card) return;
                    else openModal?.(card);
                  }}
                >
                  Add to cart
                </CardButton>
              </CardBuyButton>
            ) : (
              <CardBuyButton>
                <CardButton>More Info</CardButton>
              </CardBuyButton>
            )}
          </CardText>
        ) : null}
      </Card>
    </CardContainer>
  );
};
export default DisplayTabContent;
