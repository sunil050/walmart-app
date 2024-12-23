import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [], // Start with an empty array
  savings: 0,
  shipping: 0,
  totalCartAmount: 0,
  totalDeliveryAmount: 0,
};

const getTotalPrice = (cartItems) =>
  cartItems.reduce(
    (total, item) => total + (item.Price || 0) * (item.quantity || 1),
    0
  );

const getTotalDelivery = (cartItems) =>
  cartItems.reduce((total, item) => total + (item.Deliveryfees || 0), 0);

const notifywarn = () => {
  toast.warn("This Item Already Added to the Cart", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex === -1) {
        state.items.push({
          ...action.payload,
          quantity: 1, // Default quantity to 1 if not provided
        });

        // ${action.payload.name} has been
        toast.success("added to the cart!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
            backgroundColor: "#A4BE7B",
            color: "#212121",
            fontSize: "16px",
          },
        });
      } else {
        notifywarn();
      }

      // Update totals
      state.totalCartAmount = getTotalPrice(state.items);
      state.totalDeliveryAmount = getTotalDelivery(state.items);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }

      // Update totals
      state.totalCartAmount = getTotalPrice(state.items);
      state.totalDeliveryAmount = getTotalDelivery(state.items);
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      // Update totals
      state.totalCartAmount = getTotalPrice(state.items);
      state.totalDeliveryAmount = getTotalDelivery(state.items);
    },
    removeItem: (state, action) => {
      const removedItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (removedItem) {
        console.log("Removed item:", removedItem);
        // Trigger the toast notification before updating the state
        toast.warn(`${removedItem.name} has been removed from the cart.`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
            backgroundColor: "#FEF5ED", // Light red background
            color: "#F72C5B", // Dark red text
            border: "1px solid #f5c6cb", // Light red border
            borderRadius: "8px", // Rounded corners
            padding: "16px", // Add padding
            fontSize: "14px", // Adjust font size
            fontWeight: "bold", // Bold text
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
          },
        });
      }

      // Remove the item from the state
      state.items = state.items.filter((item) => item.id !== action.payload);

      // Update totals
      state.totalCartAmount = getTotalPrice(state.items);
      state.totalDeliveryAmount = getTotalDelivery(state.items);
    },
  },
});

// Export actions
export const {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  addItemToCart,
} = cartSlice.actions;

// Selectors
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + (item.quantity || 1), 0);

export const selectTotalPrice = (state) =>
  state.cart.items.reduce(
    (total, item) => total + (item.Price || 0) * (item.quantity || 1),
    0
  );

export const selectTotalDelivery = (state) =>
  state.cart.items.reduce((total, item) => total + (item.Deliveryfees || 0), 0);

// Reducer
export default cartSlice.reducer;
