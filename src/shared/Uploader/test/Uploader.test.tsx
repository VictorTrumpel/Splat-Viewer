import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Uploader } from "../Uploader";
import { DataTestIdMap } from "./DataTestIdMap";

describe("Спецификация компонента <Uploader />", () => {
  test("Если не передать actionText, то будет отображаться дефолтный текст", async () => {
    render(<Uploader />);
    screen.getByText(
      "Кликните или перетащите файл в эту область, что бы его загрузить"
    );
  });
  test("Если не передать icon, то будет отображаться дефолтная иконка", async () => {
    render(<Uploader />);
    screen.getByTestId(DataTestIdMap.defaultUploaderIcon);
  });
  test("Если передать свой текст в actionText, то он будет отображаться", async () => {
    render(<Uploader actionText="ФАЙЛ" />);
    screen.getByText("ФАЙЛ");
  });
  test("Если передать свой компонент в поле icon, то он будет отображаться", async () => {
    render(<Uploader icon={<span data-testid="custom-icon">ICON</span>} />);
    screen.getByTestId("custom-icon");
  });
});
