import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReturnHomeBtn } from "./ReturnHomeBtn";
import userEvent from "@testing-library/user-event";

describe("Спецификация компонента <ReturnHomeBtn />", () => {
  test("При нажатии на кнопку вызывается handleReturnToHomePage из вью-модел", async () => {
    const handleReturnToHomePage = vi.fn();

    const useViewModel = () => ({
      handleReturnToHomePage,
    });

    render(<ReturnHomeBtn useViewModel={useViewModel} />);

    const button = screen.getByTestId("bind-key-button");

    await userEvent.click(button);

    expect(handleReturnToHomePage).toBeCalledTimes(1);
  });
});
