import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IMenuRouterState {
  menuPage: "startPage" | "workArea";
}

const initialState: IMenuRouterState = {
  menuPage: "startPage",
};

const menuRouterSlice = createSlice({
  name: "filesMenu",
  initialState,
  reducers: {
    setPage(
      state: IMenuRouterState,
      { payload }: PayloadAction<IMenuRouterState["menuPage"]>
    ) {
      state.menuPage = payload;
    },
  },
});

export const menuRouterActions = menuRouterSlice.actions;

export const menuRouterStore = menuRouterSlice.reducer;
