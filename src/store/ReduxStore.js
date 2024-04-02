import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";

const Reduxstore = configureStore({
  reducer: { LogInStore: TokenSlice.reducer },
});
export default Reduxstore;
