import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "@/components/misc/Heading";
import { PrimaryButton as PrimaryButtonBase } from "@/components/misc/Buttons";
import DotBlob from "@/images/dot-pattern.svg";
import { HighlightedText } from "./misc/HighlightedText";
import Stats from "@/images/Stats.svg";
import Image from "next/image";
interface TextColumnProps {
  textonleft: string; // Adjust the type as needed
}
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pb-20`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const imageContainerCss = tw`p-2!`;

const ImageColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const TextColumn = styled(Column)<TextColumnProps>(() => [
  tw`md:w-7/12 mt-16 md:mt-0`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-base md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const StatisticsColumn = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const DotBlobContainer = tw.div`pointer-events-none rounded-md absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`;

export default function Statistics() {
  const data = [
    {
      key: "Orders",
      value: "300+",
    },
    {
      key: "Dishes",
      value: "50+",
    },
  ];

  return (
    <Container>
      <TwoColumn css={tw`md:items-center`}>
        <TextColumn textonleft={true.toString()}>
          <TextContent>
            <Subheading>A Reputated Brand</Subheading>
            <Heading>
              Why <HighlightedText>Choose Us ?</HighlightedText>
            </Heading>
            <Description>{description}</Description>
            <StatisticsColumn>
              {data.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </StatisticsColumn>
            <PrimaryButton
              as="a"
              href={
                "https://www.swiggy.com/city/trichy/fitaritto-majestic-appartments-cantonment-rest956093"
              }
            >
              Order Now
            </PrimaryButton>
          </TextContent>
        </TextColumn>
        <ImageColumn css={imageContainerCss}>
          <Image
            src={Stats}
            alt="UTP-Logo"
            width={400}
            style={{ borderRadius: "5%" }}
          />
          <DotBlobContainer>
            <Image src={DotBlob} alt="Blob-Logo" />
          </DotBlobContainer>
        </ImageColumn>
      </TwoColumn>
    </Container>
  );
}
