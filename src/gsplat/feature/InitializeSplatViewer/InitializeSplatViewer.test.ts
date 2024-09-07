import { describe, test, vi, expect, beforeEach } from "vitest";
import { InitializeSplatViewer } from "./InitializeSplatViewer";
import * as Core from "@gsplat/core";

vi.mock("@gsplat/core", () => {
  const camera = {};
  const renderer = { canvas: {} };

  return {
    Scene: { create: vi.fn(() => ({})) },
    Camera: { create: vi.fn(() => camera), get: vi.fn(() => camera) },
    Renderer: { create: vi.fn(() => renderer), get: vi.fn(() => renderer) },
    OrbitControls: { create: vi.fn(() => ({})) },
  };
});

describe("Спецификация функции InitializeSplatViewer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("Создается инстанс Сцены", () => {
    InitializeSplatViewer();
    expect(Core.Scene.create).toBeCalledTimes(1);
  });
  test("Создается инстанс Рендерера", () => {
    InitializeSplatViewer();
    expect(Core.Renderer.create).toBeCalledTimes(1);
  });
  test("Создается инстанс Камеры", () => {
    InitializeSplatViewer();
    expect(Core.Camera.create).toBeCalledTimes(1);
  });
  test("Создается инстанс Контрола", () => {
    InitializeSplatViewer();
    expect(Core.OrbitControls.create).toBeCalledTimes(1);
    // контролу передаются камера и канвас, на котором должен отрабатывать контрол
    expect(Core.OrbitControls.create).toBeCalledWith(
      Core.Camera.get(),
      Core.Renderer.get().canvas
    );
  });
});
