import { describe, test, vi, expect, beforeEach } from "vitest";
import * as FrameUpdaterCombiner from "./FrameUpdaterCombiner";

describe("Спецификация модуля FrameUpdaterCombiner", () => {
  beforeEach(() => {
    FrameUpdaterCombiner.updatersSet.clear();
    vi.useFakeTimers();
    window.requestAnimationFrame = vi.fn((cb) => setTimeout(cb, 1));
  });

  test("addUpdateFunction добавляет колбэк в стор", () => {
    const cb = () => {};

    FrameUpdaterCombiner.addUpdateFunction(cb);

    expect(FrameUpdaterCombiner.updatersSet.has(cb)).toBeTruthy();
  });

  test("removeUpdateFunction удаляет колб-бэк из стора", () => {
    const cb = () => {};

    FrameUpdaterCombiner.addUpdateFunction(cb);
    FrameUpdaterCombiner.removeUpdateFunction(cb);

    expect(FrameUpdaterCombiner.updatersSet.has(cb)).toBeFalsy();
  });

  test("update вызывает все колбэки, которые были добавлены по одному разу", () => {
    const cb1 = vi.fn();
    const cb2 = vi.fn();

    FrameUpdaterCombiner.addUpdateFunction(cb1);
    FrameUpdaterCombiner.addUpdateFunction(cb2);

    FrameUpdaterCombiner.update();

    expect(cb1).toBeCalledTimes(1);
    expect(cb2).toBeCalledTimes(1);
  });

  test("stopListenFrame останавливает подписку на requestAnimationFrame", () => {
    const cb1 = vi.fn();
    const cb2 = vi.fn();

    FrameUpdaterCombiner.addUpdateFunction(cb1);
    FrameUpdaterCombiner.addUpdateFunction(cb2);

    FrameUpdaterCombiner.startListenFrame();

    vi.advanceTimersByTime(3);

    expect(cb1).toBeCalledTimes(3);
    expect(cb2).toBeCalledTimes(3);

    // останавливаем подписку на фреймы
    FrameUpdaterCombiner.stopListenFrame();

    vi.advanceTimersByTime(6);

    expect(cb1).toBeCalledTimes(3);
    expect(cb2).toBeCalledTimes(3);
  });

  test("startListenFrame подписывается на requestAnimationFrame и вызывает все апдейтеры", () => {
    const cb1 = vi.fn();
    const cb2 = vi.fn();

    FrameUpdaterCombiner.addUpdateFunction(cb1);
    FrameUpdaterCombiner.addUpdateFunction(cb2);

    FrameUpdaterCombiner.startListenFrame();

    vi.advanceTimersByTime(50);

    expect(cb1).toBeCalledTimes(50);
    expect(cb2).toBeCalledTimes(50);

    FrameUpdaterCombiner.stopListenFrame();
  });
});
