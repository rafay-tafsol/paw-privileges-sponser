// import { combineReducers } from "redux";
// import authReducer from "./auth/authSlice";

// const rootReducer = combineReducers({
//   authReducer
// });

// export default rootReducer;

import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import commonReducer from "./common/commonSlice";
import messageNotiCounterSlice from "./messageNotiCounter/messageNotiCounter";

const rootReducer = combineReducers({
  authReducer,
  commonReducer,
  messageNotiCounterSlice,
});

export default rootReducer;
