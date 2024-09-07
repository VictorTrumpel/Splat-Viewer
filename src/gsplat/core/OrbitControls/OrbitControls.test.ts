import { describe, test, vi, expect, beforeEach } from "vitest";
import { OrbitControls as GSOrbitControls } from "./Class";
import { Camera } from "@gsplat/core";
import * as OrbitControls from "./OrbitControls";

interface IMockOrbitControls {
  camera: unknown;
  canvas: unknown;
}

vi.mock("./Class", () => {
  class OrbitControlsMock {
    constructor(public camera: unknown, public canvas: unknown) {}
    update = vi.fn();
  }
  return { OrbitControls: OrbitControlsMock };
});

describe("Спецификация модуля OrbitControls", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Если попытаться получить инстанс OrbitControls до того, как он был создан, будет ошибка", () => {
    try {
      OrbitControls.get();
      expect(null).toBe(
        "Должна быть ошибка т.к. инстанс OrbitControls еще не создан"
      );
    } catch (e) {
      expect((e as Error).message).toBe("OrbitControls need to create");
    }
  });

  test("Метод create создает инстанс OrbitControls с переданными camera и canvas", () => {
    const camera = {} as ReturnType<typeof Camera.get>;
    const canvas = {} as HTMLCanvasElement;

    const orbitControls = OrbitControls.create(
      camera,
      canvas
    ) as unknown as IMockOrbitControls;

    const isOrbitControl = orbitControls instanceof GSOrbitControls;

    expect(isOrbitControl).toBeTruthy();

    expect(orbitControls.camera).toBe(camera);
    expect(orbitControls.canvas).toBe(canvas);
  });

  test("Метод create всегда возвращает один и тот же инстанс OrbitControls", () => {
    const camera = {} as ReturnType<typeof Camera.get>;
    const canvas = {} as HTMLCanvasElement;

    const orbitControls1 = OrbitControls.create(camera, canvas);
    const orbitControls2 = OrbitControls.create(camera, canvas);

    const isTheSameInstance = orbitControls1 === orbitControls2;

    const isOrbitInstance = orbitControls2 instanceof GSOrbitControls;

    expect(isTheSameInstance).toBeTruthy();
    expect(isOrbitInstance).toBeTruthy();
  });

  test("Метод get возвращает тот же инстанс OrbitControls, что и create", () => {
    const camera = {} as ReturnType<typeof Camera.get>;
    const canvas = {} as HTMLCanvasElement;

    const orbitControls1 = OrbitControls.create(camera, canvas);
    const orbitControls2 = OrbitControls.get();

    const isTheSameInstance = orbitControls1 === orbitControls2;
    const isOrbitInstance = orbitControls2 instanceof GSOrbitControls;

    expect(isTheSameInstance).toBeTruthy();
    expect(isOrbitInstance).toBeTruthy();
  });

  test("Метод update вызывает update на инстансе OrbitControls", () => {
    OrbitControls.update();

    const control = OrbitControls.get();

    expect(control.update).toBeCalledTimes(1);
  });
});
