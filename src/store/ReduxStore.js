import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";
import DataSlice from "./DataSlice";

const Reduxstore = configureStore({
  reducer: { LogInStore: TokenSlice.reducer, Data: DataSlice.reducer },
});
export default Reduxstore;
