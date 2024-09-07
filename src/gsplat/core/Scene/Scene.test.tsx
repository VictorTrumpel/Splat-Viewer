import { describe, test, vi, beforeEach, expect } from "vitest";
import { Scene as GSScene } from "gsplat";
import * as Scene from "./Scene";

describe("Спецификация модуля Scene", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Метод create создает инстанс сцены", () => {
    const scene = Scene.create();
    const isScene = scene instanceof GSScene;
    expect(isScene).toBeTruthy();
  });

  test("Метод create всегда возвращает один и тот же инстанс сцены", () => {
    const scene1 = Scene.create();
    const scene2 = Scene.create();

    const isTheSameInstance = scene1 === scene2;

    const isSceneInstance = scene2 instanceof GSScene;

    expect(isTheSameInstance).toBeTruthy();
    expect(isSceneInstance).toBeTruthy();
  });

  test("Метод get возвращает тот же инстанс сцены, что и create", () => {
    const scene1 = Scene.create();
    const scene2 = Scene.get();

    const isTheSameInstance = scene1 === scene2;
    const isSceneInstance = scene2 instanceof GSScene;

    expect(isTheSameInstance).toBeTruthy();
    expect(isSceneInstance).toBeTruthy();
  });

  test("Метод reset вызывает reset на инстансе сцены", () => {
    const scene = Scene.get();
    scene.reset = vi.fn();

    Scene.reset();

    expect(scene.reset).toBeCalledTimes(1);
  });
});
