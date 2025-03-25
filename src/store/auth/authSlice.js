// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   accessToken: "",
//   isLogin: false,
//   user: {
//     name:"ammar"
//   },
//   updateUser: null,
//   wishlist: [],
//   mode: "light",
//   isOpen: false,
//   fcmToken: "abc",
//   chatCount: null,
// };

// const authSlice = createSlice({
//   name: "authSlice",
//   initialState,
//   //   reducer needs a map
//   reducers: {
//     SaveFcmToken(state, action) {
//       state.fcmToken = action.payload.fcmToken;
//     },
//     saveLoginUserData(state, action) {
//       state.user = action.payload.data.user;
//       state.isLogin = true;
//       state.accessToken = action.payload?.data.token;
//     },
//     updateUser(state, action) {
//       state.user = action.payload;
//     },
//     wishlist(state, action) {
//       state.wishlist = action.payload;
//     },
//     signOutRequest(state) {
//       state.accessToken = "";
//       state.isLogin = false;
//       state.user = null;
//       state.chatCount = null;
//     },
//     ToggleDrawer(state, action) {
//       state.isOpen = action.payload;
//     },
//   },
// });

// export const {
//   SaveFcmToken,
//   saveLoginUserData,
//   signOutRequest,
//   ToggleDrawer,
//   updateUser,
//   wishlist,
// } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  isLogin: false,
  user: null,
  updateUser: null,
  isOpen: false,
  chatCount: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  //   reducer needs a map
  reducers: {
    saveLoginUserData(state, action) {
      state.user = action.payload.data.user;
      state.isLogin = true;
      state.accessToken = action.payload?.data.token;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
    signOutRequest(state) {
      state.accessToken = "";
      state.isLogin = false;
      state.user = null;
      state.chatCount = null;
    },
    ToggleDrawer(state, action) {
      state.isOpen = action.payload;
    },
    saveToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

export const {
  saveLoginUserData,
  signOutRequest,
  ToggleDrawer,
  updateUser,
  saveToken,
} = authSlice.actions;

export default authSlice.reducer;
