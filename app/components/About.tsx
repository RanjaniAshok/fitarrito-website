"use client";
import React from "react";
import cuisine from "@/images/cuisine.svg";
import Link from "next/link";
import DotBlob from "@/images/dot-pattern.svg";
import Image from "next/image";
import tw from "twin.macro";
const Container = tw.div`relative`;

const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-10 md:py-20`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const Description = tw.p`my-8 text-center md:text-left text-xs md:text-base lg:text-lg font-semibold leading-relaxed text-secondary-200`;

const DotBlobContainer = tw.div`pointer-events-none rounded-md absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`;
const HighlightedText = tw.span`bg-customTheme text-gray-100 px-4 transform -skew-x-12 inline-block leading-snug text-3xl font-black`;
const Heading = tw.h1`font-black text-3xl text-gray-600 md:text-5xl leading-snug max-w-3xl`;

export default function About() {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <Heading>Delicious & Healthy </Heading>
          <HighlightedText>Meals Near You.</HighlightedText>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <Link
            target="_blank"
            href={
              "https://www.swiggy.com/city/trichy/fitaritto-majestic-appartments-cantonment-rest956093"
            }
            className="font-bold px-8 lg:px-10 py-3 rounded bg-customTheme text-gray-100 hocus:bg-customTheme focus:outline-none transition duration-300"
          >
            Order Now
          </Link>
        </LeftColumn>
        <RightColumn>
          <Image
            src={cuisine}
            alt="UTP-Logo"
            width={1200}
            style={{ borderRadius: "5%" }}
          />
          <DotBlobContainer>
            <Image src={DotBlob} alt="Blob-Logo" />
          </DotBlobContainer>
        </RightColumn>
      </TwoColumn>
      {/* <DecoratorBlobContrainer>
        <Image src={DecoratorBlob} alt="Blob-Logo" />
      </DecoratorBlobContrainer> */}
    </Container>
  );
}
