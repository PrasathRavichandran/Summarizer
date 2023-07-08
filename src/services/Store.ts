import { configureStore } from "@reduxjs/toolkit";
import { ArticleApi } from "./Article";

export const Store = configureStore({
  reducer: {
    [ArticleApi.reducerPath]: ArticleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ArticleApi.middleware),
});
