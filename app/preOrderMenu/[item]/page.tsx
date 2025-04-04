"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useAppDispatch } from "app/lib/hooks";
import Image from "next/image";
import { RootState } from "app/lib/store";
import { setSelectedMenu } from "app/lib/features/menuSlice";
import NutrientCalculator from "@/components/NutrientCalculator";
import tw from "twin.macro";

interface addOnsItem {
  type: string;
  value: Array<{
    item: string;
    imagesrc: { src: string };
    nutrient?: {
      mini: { cals: string; protein: string; fat: string; carbs: string };
      regular: { cals: string; protein: string; fat: string; carbs: string };
    };
  }>;
}
const Container = tw.div`mt-20 px-4`;
const Section = tw.div`bg-white p-4 rounded-lg shadow-md my-4`;
const Title = tw.h2`text-lg font-bold text-yellow-800 mb-2 uppercase`;
const IngredientItem = tw.label`flex items-center justify-between py-3 border-b`;
const Input = tw.input`w-5 h-5 accent-red-500`;
const NutrientInfo = tw.div`text-right text-gray-600 text-sm`;
const ImageWrapper = tw.div`w-12 h-12 rounded-full overflow-hidden shadow-lg bg-gray-200`;

export default function PreOrderMenu() {
  const AddOnImage = React.memo(
    ({ src, alt }: { src: string; alt: string }) => (
      <ImageWrapper>
        <Image
          src={src}
          alt={alt}
          width={48}
          height={48}
          className="object-cover"
        />
      </ImageWrapper>
    )
  );
  AddOnImage.displayName = "AddOnImage";

  const ChooseAddOns = React.memo(({ data }: { data: addOnsItem[] }) => {
    return data?.map((category, index) => (
      <Section key={index}>
        <Title>{category?.type}</Title>
        {category?.value?.map((protein) => (
          <IngredientItem key={protein.item}>
            <div className="flex items-center space-x-3">
              <Input
                type="checkbox"
                name="addOns"
                checked={selectedAddOnsMemo.some(
                  (selected) => selected.item === protein.item
                )}
                onChange={() =>
                  handleSelection({
                    item: protein.item,
                    nutrient: protein.nutrient,
                  })
                }
              />
              <AddOnImage src={protein.imagesrc.src} alt={protein.item} />

              <p className=" text-gray-700 text-lg font-semibold">
                {protein.item}
              </p>
            </div>
            <NutrientInfo>
              <span className="font-bold text-2xl">
                {protein.nutrient?.regular?.cals ?? 0} cal
              </span>{" "}
              <br />
              <span className="text-red-600 font-semibold text-lg px-4">
                {protein.nutrient?.regular?.fat ?? 0}g Fat
              </span>
              <span className="w-px h-6 bg-gray-300 inline-block mx-2"></span>
              <span className="text-green-600 font-semibold text-lg px-4">
                {protein.nutrient?.regular?.protein ?? 0}g Protein
              </span>
              <span className="w-px h-6 bg-gray-300 inline-block mx-2"></span>
              <span className="text-yellow-600 font-semibold text-lg">
                {protein.nutrient?.regular?.carbs ?? 0}g Carbs
              </span>
            </NutrientInfo>
          </IngredientItem>
        ))}
      </Section>
    ));
  });
  ChooseAddOns.displayName = "ChooseAddOns";

  const params = useParams();
  const item = params?.item ?? "";
  const selectedMenu = useSelector(
    (state: RootState) => state.menu.selectedMenu
  );

  const dispatch = useAppDispatch();
  const [selectedAddOns, setSelectedAddOns] = useState<
    {
      item: string;
      nutrient?: { cals: string; fat: string; protein: string; carbs: string };
    }[]
  >([]);
  const selectedAddOnsMemo = React.useMemo(
    () => selectedAddOns,
    [selectedAddOns]
  );

  const [totalNutrients, setTotalNutrients] = useState({
    cals: 0,
    fat: 0,
    protein: 0,
    carbs: 0,
  });

  useEffect(() => {
    const updatedNutrients = { cals: 0, fat: 0, protein: 0, carbs: 0 };

    selectedAddOns.forEach((addOn) => {
      updatedNutrients.cals += Number(addOn.nutrient?.cals ?? 0);
      updatedNutrients.fat += Number(addOn.nutrient?.fat ?? 0);
      updatedNutrients.protein += Number(addOn.nutrient?.protein ?? 0);
      updatedNutrients.carbs += Number(addOn.nutrient?.carbs ?? 0);
    });

    setTotalNutrients(updatedNutrients);
    dispatch(setSelectedMenu({ ...selectedMenu, nutrient: updatedNutrients }));
  }, [selectedAddOns, dispatch]);

  const handleSelection = (proteinItem: {
    item: string;
    nutrient?: {
      regular: { cals: string; fat: string; protein: string; carbs: string };
    };
  }) => {
    setSelectedAddOns((prev) => {
      const index = prev.findIndex((item) => item.item === proteinItem.item);

      if (index !== -1) {
        return prev.filter((item) => item.item !== proteinItem.item);
      }

      return [
        ...prev,
        {
          item: proteinItem.item,
          nutrient: proteinItem.nutrient?.regular, // Ensure nutrient data is stored
        },
      ];
    });
  };

  if (!item) return <p>Loading...</p>;
  const addOns = selectedMenu?.addOns;
  const specificAddons = selectedMenu?.specificAddons;

  return (
    <Container>
      {/* Nutrient Summary */}
      <NutrientCalculator
        showAddToBag={true}
        data={
          selectedAddOns.length === 0
            ? selectedMenu?.nutrient ?? {
                cals: 0,
                fat: 0,
                protein: 0,
                carbs: 0,
              }
            : totalNutrients
        }
        title={selectedMenu?.title}
        content={selectedMenu?.content}
      />

      <ChooseAddOns data={Array.isArray(addOns) ? addOns : []} />
      <ChooseAddOns
        data={Array.isArray(specificAddons) ? specificAddons : []}
      />
      {/* Fixed Add to Bag Button */}
    </Container>
  );
}
