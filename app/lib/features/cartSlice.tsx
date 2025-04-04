import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface Item {
  title: string;
  imagesrc: { src: string };
  content: string;
  quantity: number;
  price: number | string;
  rating: number | string;
  reviews: string;
}

export const addItemsToCart = createAsyncThunk(
  "cart/addItemsToCart",
  async (body: Item) => {
    return body;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [] as Item[],
    totalAmt: 0,
    loading: "idle",
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmt = 0;
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(
        (item) => item.title === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
      state.totalAmt = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
      );
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(
        (item) => item.title === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.totalAmt = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
      );
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.title !== action.payload
      );
      state.totalAmt = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemsToCart.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        addItemsToCart.fulfilled,
        (state, action: PayloadAction<Item>) => {
          state.loading = "succeeded";

          const existingItem = state.cartItems.find(
            (item) => item.title === action.payload.title
          );

          if (existingItem) {
            existingItem.quantity += action.payload.quantity;
          } else {
            state.cartItems.push(action.payload);
          }
          state.totalAmt = state.cartItems.reduce(
            (total, item) => total + Number(item.price) * item.quantity,
            0
          );
        }
      )
      .addCase(addItemsToCart.rejected, (state) => {
        state.loading = "failed";
      });
  },
});
export const selectTotalQuantity = (state: RootState) =>
  state.cart.cartItems?.reduce(
    (total: number, item: Item) => total + (item.quantity ?? 0),
    0
  ) || 0;
export const { incrementQuantity, decrementQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
