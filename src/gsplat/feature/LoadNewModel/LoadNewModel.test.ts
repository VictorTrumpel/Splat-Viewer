import { describe, test, vi, expect, beforeEach } from "vitest";
import { Scene } from "@gsplat/core";
import { Loader } from "gsplat";
import { LoadNewModel } from "./LoadNewModel";

vi.mock("@gsplat/core", () => {
  return {
    Scene: {
      get: () => ({}),
      reset: vi.fn(),
    },
  };
});

vi.mock("gsplat", () => {
  return {
    Loader: {
      LoadFromFileAsync: vi.fn(() => Promise.resolve()),
    },
  };
});

describe("Спецификация функции LoadNewModel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("Функция вызывает метод reset у модуля Scene", () => {
    const imageContent = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
    const file = new File([imageContent], "test.splat", {
      type: "text/plain",
    });

    LoadNewModel(file);

    expect(Scene.reset).toBeCalledTimes(1);
  });
  test("Функция вызывает метод LoadFromFileAsync у класса Loader из пакета gsplat", async () => {
    const imageContent = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
    const file = new File([imageContent], "test.splat", {
      type: "text/plain",
    });

    LoadNewModel(file);

    expect(Loader.LoadFromFileAsync).toBeCalledWith(file, Scene.get());
  });
});
