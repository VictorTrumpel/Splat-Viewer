import { describe, expect, test, vi, beforeEach } from "vitest";
import { useReturnHomeBtnViewModel } from "./useReturnHomeBtnViewModel";
import { renderHook } from "@testing-library/react";
import { createReduxStore } from "@shared";
import { Provider } from "react-redux";
import * as GSPlatFeature from "@gsplat/feature";

vi.mock("@gsplat/feature", () => {
  return {
    LoadDefaultModel: vi.fn(),
    MainScene: {
      clearScene: vi.fn(),
    },
    StartScene: {
      initScene: vi.fn(),
    },
  };
});

describe("Спецификация хука useReturnHomeBtnViewModel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test('handleReturnToHomePage вызывает метод clearScene фичи MainScene из пакета "@gsplat/feature"', async () => {
    const store = createReduxStore();

    const { result } = renderHook(() => useReturnHomeBtnViewModel(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const { handleReturnToHomePage } = result.current;

    handleReturnToHomePage();

    expect(GSPlatFeature.MainScene.clearScene).toBeCalledTimes(1);
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
  test('handleReturnToHomePage вызывает initScene фичи StartScene из пакета "@gsplat/feature"', () => {
    const store = createReduxStore({
      menuRouterStore: { menuPage: "workArea" },
    });

    const { result } = renderHook(() => useReturnHomeBtnViewModel(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const { handleReturnToHomePage } = result.current;

    handleReturnToHomePage();

    expect(GSPlatFeature.StartScene.initScene).toBeCalledTimes(1);
  });
});
