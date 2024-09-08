import { useCameraKeyBoardViewModel } from "./useCameraKeyBoardViewModel";
import { OrbitControls } from "@gsplat/core";
import { describe, test, vi, expect } from "vitest";

vi.mock("@gsplat/core", () => {
  return {
    OrbitControls: {
      startMovingLeft: vi.fn(),
      stopMovingLeft: vi.fn(),

      startMovingRight: vi.fn(),
      stopMovingRight: vi.fn(),

      startMovingForward: vi.fn(),
      stopMovingForward: vi.fn(),

      startMovingBack: vi.fn(),
      stopMovingBack: vi.fn(),

      startRotateLeft: vi.fn(),
      stopRotateLeft: vi.fn(),

      startRotateRight: vi.fn(),
      stopRotateRight: vi.fn(),

      startRotateTop: vi.fn(),
      stopRotateTop: vi.fn(),

      startRotateBottom: vi.fn(),
      stopRotateBottom: vi.fn(),
    },
  };
});

describe("Спецификация хука useCameraKeyBoardViewModel", () => {
  test("handleStartMovingLeft вызывает startMovingLeft из модуля OrbitControl", () => {
    const { handleStartMovingLeft } = useCameraKeyBoardViewModel();
    handleStartMovingLeft();
    expect(OrbitControls.startMovingLeft).toBeCalledTimes(1);
  });
  test("handleStopMovingLeft вызывает stopMovingLeft из модуля OrbitControl", () => {
    const { handleStopMovingLeft } = useCameraKeyBoardViewModel();
    handleStopMovingLeft();
    expect(OrbitControls.stopMovingLeft).toBeCalledTimes(1);
  });
  test("hanldeStartMovingRight вызывает startMovingRight из модуля OrbitControl", () => {
    const { handleStartMovingRight } = useCameraKeyBoardViewModel();
    handleStartMovingRight();
    expect(OrbitControls.startMovingRight).toBeCalledTimes(1);
  });
  test("handleStopMovingRight вызывает stopMovingRight из модуля OrbitControl", () => {
    const { handleStopMovingRight } = useCameraKeyBoardViewModel();
    handleStopMovingRight();
    expect(OrbitControls.stopMovingRight).toBeCalledTimes(1);
  });
  test("handleStartMovingForward вызывает startMovingForward из модуля OrbitControl", () => {
    const { handleStartMovingForward } = useCameraKeyBoardViewModel();
    handleStartMovingForward();
    expect(OrbitControls.startMovingForward).toBeCalledTimes(1);
  });
  test("handleStopMovingForward вызывает stopMovingForward из модуля OrbitControl", () => {
    const { handleStopMovingForward } = useCameraKeyBoardViewModel();
    handleStopMovingForward();
    expect(OrbitControls.stopMovingForward).toBeCalledTimes(1);
  });
  test("handleStartMovingBack вызывает startMovingBack из модуля OrbitControl", () => {
    const { handleStartMovingBack } = useCameraKeyBoardViewModel();
    handleStartMovingBack();
    expect(OrbitControls.startMovingBack).toBeCalledTimes(1);
  });
  test("handleStopMovingBack вызывает stopMovingBack из модуля OrbitControl", () => {
    const { handleStopMovingBack } = useCameraKeyBoardViewModel();
    handleStopMovingBack();
    expect(OrbitControls.stopMovingBack).toBeCalledTimes(1);
  });
  test("handleStartRotateLeft вызывает startRotateLeft из модуля OrbitControl", () => {
    const { handleStartRotateLeft } = useCameraKeyBoardViewModel();
    handleStartRotateLeft();
    expect(OrbitControls.startRotateLeft).toBeCalledTimes(1);
  });
  test("handleStopRotateLeft вызывает stopRotateLeft из модуля OrbitControl", () => {
    const { handleStopRotateLeft } = useCameraKeyBoardViewModel();
    handleStopRotateLeft();
    expect(OrbitControls.stopRotateLeft).toBeCalledTimes(1);
  });

  test("handleStartRotateRight вызывает startRotateRight из модуля OrbitControl", () => {
    const { handleStartRotateRight } = useCameraKeyBoardViewModel();
    handleStartRotateRight();
    expect(OrbitControls.startRotateRight).toBeCalledTimes(1);
  });
  test("handleStopRotateRight вызывает stopRotateRight из модуля OrbitControl", () => {
    const { handleStopRotateRight } = useCameraKeyBoardViewModel();
    handleStopRotateRight();
    expect(OrbitControls.stopRotateRight).toBeCalledTimes(1);
  });

  test("handleStartRotateTop вызывает startRotateTop из модуля OrbitControl", () => {
    const { handleStartRotateTop } = useCameraKeyBoardViewModel();
    handleStartRotateTop();
    expect(OrbitControls.startRotateTop).toBeCalledTimes(1);
  });
  test("handleStopRotateTop вызывает stopRotateTop из модуля OrbitControl", () => {
    const { handleStopRotateTop } = useCameraKeyBoardViewModel();
    handleStopRotateTop();
    expect(OrbitControls.stopRotateTop).toBeCalledTimes(1);
  });

  test("handleStartRotateBottom вызывает startRotateBottom из модуля OrbitControl", () => {
    const { handleStartRotateBottom } = useCameraKeyBoardViewModel();
    handleStartRotateBottom();
    expect(OrbitControls.startRotateBottom).toBeCalledTimes(1);
  });
  test("handleStopRotateBottom вызывает stopRotateBottom из модуля OrbitControl", () => {
    const { handleStopRotateBottom } = useCameraKeyBoardViewModel();
    handleStopRotateBottom();
    expect(OrbitControls.stopRotateBottom).toBeCalledTimes(1);
  });
});
