import { describe, test, expect, vi, beforeEach } from "vitest";
import { WebGLRenderer } from "gsplat";
import { Camera, Scene } from "@gsplat/core";
import * as Renderer from "./Renderer";

vi.mock("gsplat", () => {
  class MockWebGLRenderer {}
  return {
    WebGLRenderer: MockWebGLRenderer,
  };
});

describe("Спецификация модуля Renderer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("Метод create создает инстанс рендерера", () => {
    const renderer = Renderer.create();
    const isRenderer = renderer instanceof WebGLRenderer;
    expect(isRenderer).toBeTruthy();
  });

  test("Метод create всегда возвращает один и тот же инстанс рендерера", () => {
    const renderer1 = Renderer.create();
    const renderer2 = Renderer.create();

    const isTheSameInstance = renderer1 === renderer2;

    const isSceneInstance = renderer2 instanceof WebGLRenderer;

    expect(isTheSameInstance).toBeTruthy();
    expect(isSceneInstance).toBeTruthy();
  });

  test("Метод get возвращает тот же инстанс сцены, что и create", () => {
    const renderer1 = Renderer.create();
    const renderer2 = Renderer.get();

    const isTheSameInstance = renderer1 === renderer2;

    const isSceneInstance = renderer2 instanceof WebGLRenderer;

    expect(isTheSameInstance).toBeTruthy();
    expect(isSceneInstance).toBeTruthy();
  });

  test("Метод render, вызывает метод render на инстансе рендерера и передает ему сцену и камеру", () => {
    const renderer = Renderer.get();

    renderer.render = vi.fn();

    const scene = {} as unknown as ReturnType<typeof Scene.get>;
    const camera = {} as unknown as ReturnType<typeof Camera.get>;

    Renderer.render(scene, camera);

    expect(renderer.render).toBeCalledTimes(1);
    expect(renderer.render).toBeCalledWith(scene, camera);
  });

  test("Метод matchWindowSize вызывает метод setSize на инстансе renderer и передает туда ширину и высоту окна", () => {
    const renderer = Renderer.get();

    renderer.setSize = vi.fn();

    Renderer.matchWindowSize();

    expect(renderer.setSize).toBeCalledTimes(1);
    expect(renderer.setSize).toBeCalledWith(
      window.innerWidth,
      window.innerHeight
    );
  });
});
