import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Burrito,
  Bowl,
  Nachos,
  Taco,
  Salad,
  Quesadillas,
} from "@/helpers/menu";

interface Item {
  title: string;
  imagesrc: { src: string };
  content: string;
  price: number | string;
  rating: number | string;
  reviews: string;
  url: string;
  nutrient?: {
    mini: { cals: string; protein: string; fat: string; carbs: string };
    regular: { cals: string; protein: string; fat: string; carbs: string };
  };
}

type Tabs = {
  [key: string]: Item[];
};

export const getMenu = createAsyncThunk("menu/getMenu", async () => {
  const Tabs = {
    Burrito,
    Bowl,
    Salad,
    Nachos,
    Taco,
    Quesadillas,
  };
  return Tabs;
  // const { data } = await getMenu();
  // return data;
});

const cartSlice = createSlice({
  name: "menu",
  initialState: {
    menu: {} as Tabs,
    menuType: "restaurant",
    loading: "idle",
  },
  reducers: {
    setMenuType: (state, action) => {
      state.menuType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMenu.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getMenu.fulfilled, (state, action: PayloadAction<Tabs>) => {
        console.log("Menu fetched:", action.payload);
        state.loading = "succeeded";
        state.menu = action.payload;
      })
      .addCase(getMenu.rejected, (state) => {
        state.loading = "failed";
      });
  },
});
export const { setMenuType } = cartSlice.actions;
export default cartSlice.reducer;
