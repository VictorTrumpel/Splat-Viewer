import { ReactNode } from "react";
import { RootState, createReduxStore } from "./store";
import { Provider } from "react-redux";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: RootState;
}

export const StoreProvider = ({
  children,
  initialState,
}: StoreProviderProps) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
