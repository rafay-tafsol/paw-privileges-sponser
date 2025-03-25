import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationCount:0,
  messageCount:0
};

const messageNotiCounterSlice = createSlice({
  name: "messageNotiCounterSlice",
  initialState,
  reducers: {
    updateNotification(state, action) {
      state.notificationCount = action.payload;
    },
    updateMessage(state, action) {    
      state.messageCount = action.payload;
    }
  },
});

export const {
  updateNotification,
  updateMessage
} = messageNotiCounterSlice.actions;

export default messageNotiCounterSlice.reducer;
