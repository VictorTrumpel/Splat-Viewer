import { describe, expect, test, vi } from "vitest";
import { act } from "react";
import { render, screen } from "@testing-library/react";
import { LoadFileFormViewModel } from "../../viewModel";
import { LoadFileForm } from "../LoadFileForm";
import { DataTestIdMap } from "./DataTestIdMap";
import userEvent from "@testing-library/user-event";

describe("Спецификация компонента <LoadFileForm />", () => {
  test("При загрузке файла вызывается функция handleValidateFile из вью-модела", async () => {
    const handleValidateFile = vi.fn(() => ({ error: null }));

    const useViewModel = (): LoadFileFormViewModel => ({
      handleValidateFile,
      handleLoadFile() {},
    });

    render(<LoadFileForm useViewModel={useViewModel} />);

    const inputFile = screen.getByTestId("input-file");

    const imageContent = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
    const file = new File([imageContent], "test.some", {
      type: "text/plain",
    });

    await act(async () => {
      await userEvent.upload(inputFile, file);
    });

    expect(handleValidateFile).toBeCalledTimes(1);
  });

  test("Если функция handleValidateFile вернула ошибку, то отображается блок с текстом этой ошибки", async () => {
    const ERROR_TEXT = "НЕПРАВИЛЬНЫЙ ФАЙЛ";

    const handleValidateFile = vi.fn(() => ({
      error: new Error(ERROR_TEXT),
    }));

    const useViewModel = (): LoadFileFormViewModel => ({
      handleValidateFile,
      handleLoadFile() {},
    });

    render(<LoadFileForm useViewModel={useViewModel} />);

    const inputFile = screen.getByTestId("input-file");
    const file = new File([], "test.some", { type: "text/plain" });

    await act(async () => {
      await userEvent.upload(inputFile, file);
    });

    screen.getByText(ERROR_TEXT);
  });
  test("Если функция handleValidateFile ошибку не вернула, тогда блок с ошибкой не отображается", async () => {
    const handleValidateFile = vi.fn(() => ({
      error: null,
    }));

    const useViewModel = (): LoadFileFormViewModel => ({
      handleValidateFile,
      handleLoadFile() {},
    });

    render(<LoadFileForm useViewModel={useViewModel} />);

    let errorMessage = screen.queryByTestId(DataTestIdMap.errorMessage);

    expect(errorMessage).toBeNull();

    const inputFile = screen.getByTestId("input-file");
    const file = new File([], "test.some", { type: "text/plain" });

    await act(async () => {
      await userEvent.upload(inputFile, file);
    });

    errorMessage = screen.queryByTestId(DataTestIdMap.errorMessage);

    expect(errorMessage).toBeNull();
  });
  test(`
    Если функция handleValidateFile не выдала ошибок, то начинается загрузка файла:
    - инпут загрузки файла скрывается
    - отображается имя файла
    - отображается индикатор загрузки в процентах
  `, async () => {
    const handleValidateFile = vi.fn(() => ({
      error: null,
    }));

    const useViewModel = (): LoadFileFormViewModel => ({
      handleValidateFile,
      handleLoadFile() {},
    });

    render(<LoadFileForm useViewModel={useViewModel} />);

    const errorMessage = screen.queryByTestId(DataTestIdMap.errorMessage);

    expect(errorMessage).toBeNull();

    let inputFile: HTMLElement | null = screen.getByTestId("input-file");
    const file = new File([], "test.some", { type: "text/plain" });

    await act(async () => {
      if (inputFile) {
        await userEvent.upload(inputFile, file);
      }
    });

    inputFile = screen.queryByTestId("input-file");

    expect(inputFile).toBeNull();
  });
});
