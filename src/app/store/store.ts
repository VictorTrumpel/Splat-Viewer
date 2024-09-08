import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { menuRouterStore } from "../../entities/menuRouter";

const reducer = combineReducers({
  menuRouterStore,
});

export const createReduxStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
