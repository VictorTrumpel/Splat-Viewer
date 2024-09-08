import { describe, test, vi, expect, beforeEach } from "vitest";
import { Scene } from "@gsplat/core";
import { LoadDefaultModel } from "./LoadDefaultModel";
import { Loader } from "gsplat";

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
      LoadAsync: vi.fn(() => Promise.resolve()),
    },
  };
});

describe("Спецификация функции LoadDefaultModel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("Функция вызывает метод reset у модуля Scene", () => {
    LoadDefaultModel();
    expect(Scene.reset).toBeCalledTimes(1);
  });

  test("Функция вызывает метод LoadAsync у класса Loader из пакета gsplat", async () => {
    LoadDefaultModel();
    expect(Loader.LoadAsync).toBeCalledWith("./tree.splat", Scene.get());
  });
});
