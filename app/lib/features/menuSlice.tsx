import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Main, Nachos, Taco, Smoothie, Salad } from "@/helpers/menu";

interface Item {
  title: string;
  imagesrc: { src: string };
  content: string;
  price: number | string;
  rating: number | string;
  reviews: string;
  url: string;
}

type Tabs = {
  [key: string]: Item[];
};

export const getMenu = createAsyncThunk("menu/getMenu", async () => {
  const Tabs = {
    Main,
    Salad,
    Nachos,
    Taco,
    Smoothie,
  };
  return Tabs;
  // const { data } = await getMenu();
  // return data;
});

const cartSlice = createSlice({
  name: "menu",
  initialState: {
    menu: {} as Tabs,
    loading: "idle",
  },
  reducers: {},
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

export default cartSlice.reducer;
