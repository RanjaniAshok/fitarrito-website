import tw from "twin.macro";
import React, { useState } from "react";
import { useAppDispatch } from "app/lib/hooks";

import { FaUtensils } from "react-icons/fa";
import { MdOutlineMoreTime } from "react-icons/md";
import { setMenuType } from "app/lib/features/menuSlice";
const TabContent = tw.div`
  grid grid-cols-2 
  gap-6 max-w-full px-4 text-center justify-center mt-10 
`;

const TabItem = tw.div`
  flex flex-col items-center justify-center gap-2 cursor-pointer
  transition-transform duration-300 hover:scale-105
`;

const IconWrapper = tw.div`
  text-6xl 
`;

const Label = tw.p`
  text-lg font-medium
`;

const Categories = () => {
  const [selectedMenu, setSelectedMenu] = useState("restaurant");
  const dispatch = useAppDispatch();

  return (
    <TabContent>
      <TabItem
        onClick={() => {
          setSelectedMenu("restaurant");
          dispatch(setMenuType("restaurant"));
        }}
      >
        <IconWrapper
          className={
            selectedMenu === "restaurant" ? "text-red-600" : "text-gray-600"
          }
        >
          <FaUtensils />
        </IconWrapper>
        <Label
          className={
            selectedMenu === "restaurant" ? "text-red-600" : "text-gray-600"
          }
        >
          Restaurant Menu
        </Label>
      </TabItem>
      <TabItem
        onClick={() => {
          dispatch(setMenuType("preOrder"));
          setSelectedMenu("preOrder");
        }}
      >
        <IconWrapper
          className={
            selectedMenu === "preOrder" ? "text-red-600" : "text-gray-600"
          }
        >
          <MdOutlineMoreTime />
        </IconWrapper>
        <Label
          className={
            selectedMenu === "preOrder" ? "text-red-600" : "text-gray-600"
          }
        >
          Pre-order Menu
        </Label>
      </TabItem>
    </TabContent>
  );
};

export default Categories;
