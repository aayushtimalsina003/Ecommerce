import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import counterReducer, {
  counterSlice,
} from "../../features/contact/contactReducer";
import { useDispatch, useSelector } from "react-redux";
import { catelogApi } from "../../features/catelog/catelogApi";
import { uiSlice } from "../layout/uiSlice";
import { errorApi } from "../../features/about/errorApi";

export default function configureTheStore() {
  return legacy_createStore(counterReducer);
}

export const store = configureStore({
  reducer: {
    [catelogApi.reducerPath]: catelogApi.reducer,
    [errorApi.reducerPath]: errorApi.reducer,
    counter: counterSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catelogApi.middleware, errorApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
