import { describe, expect, test, vi } from "vitest";
import { useReturnHomeBtnViewModel } from "./useReturnHomeBtnViewModel";
import { renderHook } from "@testing-library/react";
import { createReduxStore } from "@shared";
import { Provider } from "react-redux";
import * as GSPlatFeature from "@gsplat/feature";

vi.mock("@gsplat/feature", () => {
  return {
    LoadDefaultModel: vi.fn(),
  };
});

describe("Спецификация хука useReturnHomeBtnViewModel", () => {
  test('handleReturnToHomePage вызывает метод LoadDefaultModel из пакета "@gsplat/feature"', async () => {
    const store = createReduxStore();

    const { result } = renderHook(() => useReturnHomeBtnViewModel(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const { handleReturnToHomePage } = result.current;

    handleReturnToHomePage();

    expect(GSPlatFeature.LoadDefaultModel).toBeCalledTimes(1);
  });
  test("handleReturnToHomePage меняет в сторе menuRouterActions страницу на startPage", async () => {
    const store = createReduxStore({
      menuRouterStore: { menuPage: "workArea" },
    });

    const { result } = renderHook(() => useReturnHomeBtnViewModel(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const { handleReturnToHomePage } = result.current;

    handleReturnToHomePage();

    expect(store.getState().menuRouterStore.menuPage).toBe("startPage");
  });
});
