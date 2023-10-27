import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chairBooking: [],
  chairBooked: localStorage.getItem("booked")
    ? JSON.parse(localStorage.getItem("booked"))
    : [],
};

const chairSlice = createSlice({
  name: "chair",
  initialState,
  reducers: {
    booking: (state, action) => {
      let index = state.chairBooking.findIndex(
        (item) => item.soGhe == action.payload.soGhe
      );
      if (index < 0) {
        state.chairBooking.push(action.payload);
      } else {
        state.chairBooking = state.chairBooking.filter(
          (item) => item.soGhe != action.payload.soGhe
        );
      }
    },
    booked: (state, action) => {
      let { list } = action.payload;
      list.forEach((element) => {
        state.chairBooked.push(element);
      });
      state.chairBooking = [];
      alert("Đặt chỗ thành công");
      localStorage.setItem("booked", JSON.stringify(state.chairBooked));
    },
    deleteChair: (state, action) => {
      state.chairBooking = state.chairBooked.filter(
        (item) => item.soGhe != action.payload.soGhe
      );
    },
  },
});

export const { booking, booked, deleteChair } = chairSlice.actions;

export default chairSlice.reducer;
