"use client";

import { useState } from "react";
import tw from "twin.macro";
import { useAppSelector } from "app/lib/hooks";
import { menuItem } from "@/types/types";

const ChooseVariantCard: React.FC<{ item: menuItem | null }> = ({ item }) => {
  // State for the selected variant of this specific item
  const CardInfo = tw.div`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-2 bg-gray-300 rounded-lg`;
  const CardPrice = tw.p`text-sm sm:text-sm`;
  const menuType = useAppSelector((state) => state.menu.menuType);

  const [variant, setVariant] = useState<"regular" | "jumbo">("regular");

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
      <CardPrice>Rs.{item?.nutrient?.[variant]?.price}</CardPrice>

      <div className="flex gap-4 my-2">
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
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name={`variant-${item?.title}`}
            value="jumbo"
            checked={variant === "jumbo"}
            onChange={() => setVariant("jumbo")}
            className="accent-red-500"
          />
          Jumbo
        </label>
      </div>
      {menuType === "restaurant" ? (
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
      ) : null}
    </div>
  );
};

export default ChooseVariantCard;
