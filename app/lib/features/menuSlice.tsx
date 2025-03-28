import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Burrito,
  Bowl,
  Nachos,
  Taco,
  Salad,
  Quesadillas,
} from "@/helpers/menu";
import { Bowl as Bowls, Salad as Salads } from "@/helpers/preOrderMenu";
interface Item {
  title: string;
  imagesrc: { src: string };
  content: string;
  price: number | string;
  rating: number | string;
  reviews: string;
  url: string;
  category?: string;
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
export const getPreOrderMenu = createAsyncThunk(
  "menu/getPreOrder",
  async () => {
    const Tabs = {
      Bowls,
      Salads,
    };

    return Tabs;
    // const { data } = await getMenu();
    // return data;
  }
);
const cartSlice = createSlice({
  name: "menu",
  initialState: {
    menu: {} as Tabs,
    restaurantMenu: {} as Tabs, // Store restaurant menu
    preOrderMenu: {} as Tabs,
    selectedMenu: {} as Tabs | null,
    menuType: "restaurant",
    loading: "idle",
  },
  reducers: {
    setMenuType: (state, action) => {
      state.menuType = action.payload;
      state.menu =
        action.payload === "restaurant"
          ? state.restaurantMenu
          : state.preOrderMenu;
    },
    setSelectedMenu: (state, action: PayloadAction<any>) => {
      state.selectedMenu = action.payload;
    },
    clearSelectedMenu: (state) => {
      state.selectedMenu = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMenu.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getMenu.fulfilled, (state, action: PayloadAction<Tabs>) => {
        state.restaurantMenu = action.payload;
        if (state.menuType === "restaurant") {
          state.menu = action.payload;
        }
      })

      .addCase(
        getPreOrderMenu.fulfilled,
        (state, action: PayloadAction<Tabs>) => {
          state.preOrderMenu = action.payload;
          if (state.menuType === "preOrder") {
            state.menu = action.payload;
          }
        }
      )
      .addCase(getMenu.rejected, (state) => {
        state.loading = "failed";
      });
  },
});
export const { setMenuType, setSelectedMenu, clearSelectedMenu } =
  cartSlice.actions;
export default cartSlice.reducer;
