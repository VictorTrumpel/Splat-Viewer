import { describe, test, expect, beforeEach, vi } from "vitest";
import { useLoadFileFormViewModel } from "./useLoadFileFormViewModel";
import * as GSPlatFeature from "@gsplat/feature";

vi.mock("@gsplat/feature", () => {
  return {
    LoadNewModel: vi.fn(),
  };
});

describe("Спецификация хука useLoadFileFormViewModel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("Если в функцию будет передан пустой файл, то вернется ошибка с текстом: Файл не может быть пустым", () => {
    const { handleValidateFile } = useLoadFileFormViewModel();

    const file = new File([new Blob([])], "test.splat", {
      type: "text/plain",
    });

    const { error } = handleValidateFile(file);

    const isError = error instanceof Error;

    expect(isError).toBeTruthy();
    expect(error?.message).toBe("Файл не может быть пустым");
  });
  test(`
    Если в функцию handleValidateFile передан файл НЕ с расширением .splat, 
    то возвращается ошибка с текстом: Нужно загрузить файл c расширением .splat
  `, () => {
    const { handleValidateFile } = useLoadFileFormViewModel();

    const imageContent = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);

    const file = new File([imageContent], "test.some", {
      type: "text/plain",
    });

    const { error } = handleValidateFile(file);

    const isError = error instanceof Error;

    const isRightMessage =
      error?.message === "Нужно загрузить файл с расширением .splat";

    expect(isError).toBeTruthy();
    expect(isRightMessage).toBeTruthy();
  });
  test("Если передан НЕ пустой файл с расширением .splat, то возвращается { error: null }", () => {
    const { handleValidateFile } = useLoadFileFormViewModel();

    const imageContent = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);

    const file = new File([imageContent], "test.splat", {
      type: "text/plain",
    });

    const { error } = handleValidateFile(file);

    expect(error).toBe(null);
  });
  test("Метод handleLoadFile вызывает GSPlatFeature.LoadNewModel из модуля @gsplat/feature", () => {
    const { handleLoadFile } = useLoadFileFormViewModel();

    const imageContent = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
    const file = new File([imageContent], "test.splat", {
      type: "text/plain",
    });

    handleLoadFile(file);

    expect(GSPlatFeature.LoadNewModel).toBeCalledTimes(1);
  });
});
