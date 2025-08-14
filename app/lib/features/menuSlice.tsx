import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Burrito,
  Bowl,
  Nachos,
  Taco,
  Salad,
  Quesadillas,
} from "@/helpers/menu";
import {
  Burrito as Burritos,
  Bowl as Bowls,
  Salad as Salads,
} from "@/helpers/preOrderMenu";
import { Dish } from "@/helpers/subscriptionMenu";

import { PreOrderMenuItem, menuItem, NutrientCalItem } from "app/types/types";

type Tabs = {
  [key: string]: menuItem[];
};
type PreOrderMenu = {
  [key: string]: PreOrderMenuItem[];
};
type SubscriptionMenu = {
  [key: string]: menuItem[];
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
      Burritos,
      Salads,
    };

    return Tabs;
  }
);
export const getSubscriptionMenu = createAsyncThunk(
  "menu/getSubscriptionMenu",
  async () => {
    const Tabs = {
      Dish,
    };
    return Tabs;
  }
);
const cartSlice = createSlice({
  name: "menu",
  initialState: {
    menu: {} as Tabs,
    restaurantMenu: {} as Tabs, // Store restaurant menu
    preOrderMenu: {} as PreOrderMenu,
    subscriptionMenu: {} as SubscriptionMenu,
    selectedMenu: {} as NutrientCalItem | null | undefined,
    menuType: "restaurant",
    loading: "idle",
  },
  reducers: {
    setMenuType: (state, action) => {
      state.menuType = action.payload;
    },
    setSelectedMenu: (
      state,
      action: PayloadAction<NutrientCalItem | null | undefined>
    ) => {
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
      })
      .addCase(
        getPreOrderMenu.fulfilled,
        (state, action: PayloadAction<PreOrderMenu>) => {
          state.preOrderMenu = action.payload;
        }
      )
      .addCase(
        getSubscriptionMenu.fulfilled,
        (state, action: PayloadAction<SubscriptionMenu>) => {
          state.subscriptionMenu = action.payload;
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
