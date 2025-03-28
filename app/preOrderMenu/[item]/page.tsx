"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { useAppDispatch } from "app/lib/hooks";
import Image from "next/image";
import { RootState } from "app/lib/store";
import NutrientCalculator from "@/components/NutrientCalculator";
import tw from "twin.macro";
import { FiCheck } from "react-icons/fi"; // Import checkmark icon

const Container = tw.div`mt-20 px-4`;
const Section = tw.div`bg-white p-4 rounded-lg shadow-md my-4`;
const Title = tw.h2`text-lg font-bold text-yellow-800 mb-2 uppercase`;
const IngredientItem = tw.label`flex items-center justify-between py-3 border-b`;
const Input = tw.input`w-5 h-5 accent-red-500`;
const NutrientInfo = tw.div`text-right text-gray-600 text-sm`;
const ImageWrapper = tw.div`w-12 h-12 rounded-full overflow-hidden shadow-lg bg-gray-200`;
const Button = tw.button`bg-red-500 text-white py-3 px-6 rounded-full font-bold text-lg shadow-lg`;

const PreOrderMenu = () => {
  const params = useParams();
  const router = useRouter();
  const item = params?.item ?? "";
  const selectedMenu = useSelector(
    (state: RootState) => state.menu.selectedMenu
  );
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [totalNutrients, setTotalNutrients] = useState({
    cals: 0,
    fat: 0,
    protein: 0,
    carbs: 0,
  });
  const handleSelection = (proteinItem: string) => {
    setSelectedAddOns(
      (prev) =>
        prev.includes(proteinItem)
          ? prev.filter((item) => item !== proteinItem) // Remove if already selected
          : [...prev, proteinItem] // Add if not selected
    );
  };
  useEffect(() => {}, [pathname, dispatch]);

  if (!item) return <p>Loading...</p>;
  console.log(selectedMenu, "selectedMenu");
  let addOns = selectedMenu?.addOns;
  useEffect(() => {
    let updatedNutrients = { cals: 0, fat: 0, protein: 0, carbs: 0 };

    selectedAddOns.forEach((addOn) => {
      updatedNutrients.cals += Number(addOn.nutrient.regular.cals);
      updatedNutrients.fat += Number(addOn.nutrient.regular.fat);
      updatedNutrients.protein += Number(addOn.nutrient.regular.protein);
      updatedNutrients.carbs += Number(addOn.nutrient.regular.carbs);
    });

    setTotalNutrients(updatedNutrients);
  }, [selectedAddOns]);
  console.log(selectedAddOns, "SelectedAddons");

  console.log(totalNutrients, "totalNutrients");
  return (
    <Container>
      {/* Nutrient Summary */}
      <NutrientCalculator
        data={
          selectedAddOns.length === 0 ? selectedMenu?.nutrient : totalNutrients
        }
        title={selectedMenu?.title}
        content={selectedMenu?.content}
      />

      {addOns?.map((category, index) => (
        <Section key={index}>
          <Title>{category?.type}</Title>
          {category?.value?.map((protein, idx) => (
            <IngredientItem key={idx}>
              <div className="flex items-center space-x-3">
                <Input
                  type="checkbox"
                  name="addOns"
                  checked={selectedAddOns.some(
                    (item) => item.item === protein.item
                  )}
                  onChange={() => handleSelection(protein)}
                />

                <ImageWrapper>
                  <Image
                    src={protein.imagesrc}
                    alt={protein.item}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </ImageWrapper>
                <p className=" text-gray-700 text-lg font-semibold">
                  {protein.item}
                </p>
              </div>
              <NutrientInfo>
                <span className="font-bold text-2xl">
                  {protein.nutrient.regular.cals} cal
                </span>{" "}
                <br />
                <span className="text-red-600 font-semibold text-lg px-4">
                  {protein.nutrient.regular.fat}g Fat
                </span>
                <span className="w-px h-6 bg-gray-300 inline-block mx-2"></span>
                {/* Small vertical separator */}
                <span className="text-green-600 font-semibold text-lg px-4">
                  {" "}
                  {protein.nutrient.regular.protein}g Protein
                </span>
                <span className="w-px h-6 bg-gray-300 inline-block mx-2"></span>
                <span className="text-yellow-600 font-semibold text-lg">
                  {" "}
                  {protein.nutrient.regular.carbs}g Carbs
                </span>
              </NutrientInfo>
            </IngredientItem>
          ))}
        </Section>
      ))}

      {/* Fixed Add to Bag Button */}
    </Container>
  );
};

export default PreOrderMenu;
