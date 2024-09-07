import { describe, test, vi, expect, beforeEach } from "vitest";
import { UpdateFrame } from "./UpdateFrame";
import { OrbitControls, Scene, Camera, Renderer } from "@gsplat/core";

vi.mock("@gsplat/core", () => {
  return {
    OrbitControls: { update: vi.fn() },
    Renderer: { render: vi.fn() },
    Scene: { get: () => ({}) },
    Camera: { get: () => ({}) },
  };
});

describe("Спецификация функции updateFrame", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("Обновляется OrbitControls через метод update", () => {
    UpdateFrame();

    expect(OrbitControls.update).toBeCalledTimes(1);
  });
  test("Вызывается метод render на Renderer с переданной сценой и камерой", () => {
    UpdateFrame();

    const scene = Scene.get();
    const camera = Camera.get();

    expect(Renderer.render).toBeCalledTimes(1);
    expect(Renderer.render).toBeCalledWith(scene, camera);
  });
});
