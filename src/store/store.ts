import { configureStore } from "@reduxjs/toolkit";
import systemSlice from "./features/system/systemSlice"
import cartSlice from "./features/cart/cartSlice"
const store = configureStore({
  reducer: {
    system: systemSlice,
    cart: cartSlice,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
