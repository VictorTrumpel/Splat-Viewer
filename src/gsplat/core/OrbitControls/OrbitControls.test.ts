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
    keys: { [key: string]: boolean } = {};

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

  test('Метод startMovingLeft устанавливает в инстансе контрола keys["KeyA"]=true', () => {
    OrbitControls.startMovingLeft();
    expect(OrbitControls.get().keys["KeyA"]).toBeTruthy();
  });
  test('Метод stopMovingLeft устанавиливает в инстансе контрола keys["KeyA"]=false', () => {
    OrbitControls.stopMovingLeft();
    expect(OrbitControls.get().keys["KeyA"]).toBeFalsy();
  });
  test('Метод startMovingForward устанавливает в инстансе контрола keys["KeyW"]=true', () => {
    OrbitControls.startMovingForward();
    expect(OrbitControls.get().keys["KeyW"]).toBeTruthy();
  });
  test('Метод stopMovingForward устанавливает в инстансе контрола keys["KeyW"]=false', () => {
    OrbitControls.stopMovingForward();
    expect(OrbitControls.get().keys["KeyW"]).toBeFalsy();
  });
  test('Метод startMovingBack устанавливает в инстансе контрола keys["KeyS"]=true', () => {
    OrbitControls.startMovingBack();
    expect(OrbitControls.get().keys["KeyS"]).toBeTruthy();
  });
  test('Метод stopMovingBack устанавливает в инстансе контрола keys["KeyS"]=false', () => {
    OrbitControls.stopMovingBack();
    expect(OrbitControls.get().keys["KeyS"]).toBeFalsy();
  });
  test('Метод startMovingRight устанавливает в инстансе контрола keys["KeyD"]=true', () => {
    OrbitControls.startMovingRight();
    expect(OrbitControls.get().keys["KeyD"]).toBeTruthy();
  });
  test('Метод stopMovingRight устанавливает в инстансе контрола keys["KeyD"]=false', () => {
    OrbitControls.stopMovingRight();
    expect(OrbitControls.get().keys["KeyD"]).toBeFalsy();
  });
  test('Метод startRotateLeft устанавливает в инстансе контрола keys["KeyQ"]=true', () => {
    OrbitControls.startRotateLeft();
    expect(OrbitControls.get().keys["KeyQ"]).toBeTruthy();
  });
  test('Метод stopRotateLeft устанавливает в инстансе контрола keys["KeyQ"]=false', () => {
    OrbitControls.stopRotateLeft();
    expect(OrbitControls.get().keys["KeyQ"]).toBeFalsy();
  });
  test('Метод startRotateRight устанавливает в инстансе контрола keys["KeyE"]=true', () => {
    OrbitControls.startRotateRight();
    expect(OrbitControls.get().keys["KeyE"]).toBeTruthy();
  });
  test('Метод stopRotateRight устанавливает в инстансе контрола keys["KeyE"]=false', () => {
    OrbitControls.stopRotateRight();
    expect(OrbitControls.get().keys["KeyE"]).toBeFalsy();
  });
  test('Метод startRotateTop устанавливает в инстансе контрола keys["KeyR"]=true', () => {
    OrbitControls.startRotateTop();
    expect(OrbitControls.get().keys["KeyR"]).toBeTruthy();
  });
  test('Метод stopRotateTop устанавливает в инстансе контрола keys["KeyR"]=false', () => {
    OrbitControls.stopRotateTop();
    expect(OrbitControls.get().keys["KeyR"]).toBeFalsy();
  });
  test('Метод startRotateBottom устанавливает в инстансе контрола keys["KeyF"]=true', () => {
    OrbitControls.startRotateBottom();
    expect(OrbitControls.get().keys["KeyF"]).toBeTruthy();
  });
  test('Метод stopRotateBottom устанавливает в инстансе контрола keys["KeyF"]=false', () => {
    OrbitControls.stopRotateBottom();
    expect(OrbitControls.get().keys["KeyF"]).toBeFalsy();
  });
});
