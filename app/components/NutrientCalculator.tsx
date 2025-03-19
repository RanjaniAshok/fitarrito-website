"use client";
import React from "react";
interface dataProps {
  data: {
    cals: string;
    protein: string;
    fat: string;
    carbs: string;
  };
}
const NutrientCalculator = (props: dataProps) => {
  const macroNutrients: { label: string; key: keyof typeof data }[] = [
    { label: "Fat", key: "fat" },
    { label: "Protein", key: "protein" },
    { label: "Carbs", key: "carbs" },
  ];
  const data = props?.data;
  console.log(data, "dataProps");
  return (
    <div className="bg-gray-100 py-6 px-6 rounded-lg shadow-md w-full max-w-5xl mx-auto text-center">
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-gray-900">Nutrition</h1>
      <p className="text-gray-800 mt-2 font-medium">
        Get detailed calorie and macro information based on your selected meal.
      </p>

      {/* Nutrition Display */}
      <div className="flex justify-center items-center gap-6 mt-6">
        {/* Highlighted Calories Box */}
        <div className="bg-yellow-400 text-white p-8 rounded-2xl shadow-lg flex flex-col items-center w-36">
          <span className="text-4xl font-extrabold">{data?.cals || "00"}</span>
          <p className="text-lg font-semibold">Calories</p>
        </div>

        {/* Macronutrients Boxes */}
        <div className="grid grid-cols-3 gap-6">
          {macroNutrients.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center w-28"
            >
              <span className="text-3xl font-bold text-gray-900">
                {data[item.key] || "00"}
              </span>
              <p className="text-md text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NutrientCalculator;
