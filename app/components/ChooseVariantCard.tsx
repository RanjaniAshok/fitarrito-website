"use client";

import { useState } from "react";
import tw from "twin.macro";

interface CardItem {
  // Define the structure of a card
  imagesrc: { src: string };
  title: string;
  content: string;
  price: number | string;
  rating: number | string;
  reviews: string;
  url: string;
  nutrient?: {
    mini: { cals: string; protein: string; fat: string; carbs: string };
    regular: { cals: string; protein: string; fat: string; carbs: string };
  };
  nutrients: {
    cals: string;
    protein: string;
    fat: string;
    carbs: string;
  };
  // Add other card properties here
}

const ChooseVariantCard: React.FC<{ item: CardItem | null }> = ({ item }) => {
  // State for the selected variant of this specific item
  const CardInfo = tw.p`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-2 bg-gray-300 rounded-lg`;

  const [variant, setVariant] = useState<"mini" | "regular">("mini");
  console.log(item, "item");

  console.log(variant, "variant");
  console.log(item?.nutrient?.[variant].protein);

  function NutrientBadge({ label, value }: { label: string; value: string }) {
    return (
      <div className="text-center">
        <p className="text-gray-500 text-sm font-bold">{label}</p>
        <p className="text-green-700 font-bold text-xs">{value}</p>
      </div>
    );
  }
  return (
    <div className="mt-2">
      <div className="flex gap-4 my-2">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name={`variant-${item?.title}`}
            value="mini"
            checked={variant === "mini"}
            onChange={() => setVariant("mini")}
            className="accent-red-500"
          />
          Mini
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name={`variant-${item?.title}`}
            value="regular"
            checked={variant === "regular"}
            onChange={() => setVariant("regular")}
            className="accent-red-500"
          />
          Regular
        </label>
      </div>
      <CardInfo>
        <NutrientBadge
          label="Cals"
          value={`${item?.nutrient?.[variant]?.cals}`}
        />
        <NutrientBadge
          label="Carbs"
          value={`${item?.nutrient?.[variant]?.carbs}`}
        />
        <NutrientBadge
          label="Fat"
          value={`${item?.nutrient?.[variant]?.fat}`}
        />
        <NutrientBadge
          label="Protein"
          value={`${item?.nutrient?.[variant]?.protein}`}
        />
      </CardInfo>
    </div>
  );
};

export default ChooseVariantCard;
