import { describe, test, expect } from "vitest";
import { Camera as GSCamera } from "gsplat";
import * as Camera from "./Camera";

describe("Спецификация модуля Camera", () => {
  test("Метод create создает инстанс камеры", () => {
    const camera = Camera.create();
    const isCamera = camera instanceof GSCamera;
    expect(isCamera).toBeTruthy();
  });

  test("Метод create всегда возвращает один и тот же инстанс камеры", () => {
    const camera1 = Camera.create();
    const camera2 = Camera.create();

    const isTheSameInstance = camera1 === camera2;

    const isSceneInstance = camera2 instanceof GSCamera;

    expect(isTheSameInstance).toBeTruthy();
    expect(isSceneInstance).toBeTruthy();
  });

  test("Метод get возвращает тот же инстанс сцены, что и create", () => {
    const camera1 = Camera.create();
    const camera2 = Camera.get();

    const isTheSameInstance = camera1 === camera2;
    const isSceneInstance = camera2 instanceof GSCamera;

    expect(isTheSameInstance).toBeTruthy();
    expect(isSceneInstance).toBeTruthy();
  });
});
