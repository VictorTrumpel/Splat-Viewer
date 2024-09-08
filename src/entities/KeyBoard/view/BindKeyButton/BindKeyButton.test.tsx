import { describe, expect, test, vi } from "vitest";
import { KeyButtonProps, KeyButto } from "@shared";
import { Button } from "antd";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BindKeyButton } from "./BindKeyButton";
import userEvent from "@testing-library/user-event";
import { act } from "react";

vi.mock("@shared", () => {
  return {
    KeyButton: vi.fn(({ isPressed, ...props }: KeyButtonProps) => (
      <Button data-testid="bind-key-button" {...props}>
        <span data-testid="isPressed-prop">{`${isPressed}`}</span>
      </Button>
    )),
  };
});

describe("Спецификация компонента <BindKeyBoard />", () => {
  test(`При первом рендеринге isPressd в <KeyButton /> пробрасывается в значении false`, () => {
    render(<BindKeyButton toolTipText="gds">icon</BindKeyButton>);

    screen.debug();
    const isPressedProp = screen.getByTestId("isPressed-prop");
    expect(isPressedProp.textContent).toBe("false");
  });
  test(`При нажатии на кнопку isPressd передается как true, когда кнопку отпускают, снова становится false`, async () => {
    const onPressed = vi.fn();
    const onPressedOut = vi.fn();

    render(
      <BindKeyButton
        onPressed={onPressed}
        onPressedOut={onPressedOut}
        toolTipText="gds"
      >
        icon
      </BindKeyButton>
    );

    const button = screen.getByTestId("bind-key-button");

    // нажимаем левой кнопкой мыши по кнопке
    await act(async () => {
      fireEvent.mouseDown(button);
    });

    let isPressedProp = screen.getByTestId("isPressed-prop");
    expect(isPressedProp.textContent).toBe("true");
    expect(onPressed).toBeCalledTimes(1);

    // отпускаем левую кнопку мыши
    await act(async () => {
      fireEvent.mouseUp(button);
    });

    isPressedProp = screen.getByTestId("isPressed-prop");
    expect(isPressedProp.textContent).toBe("false");
    expect(onPressedOut).toBeCalledTimes(1);
  });

  test(`
    Если на клавиатуре нажать клавиши, которые переданы в bindKeys, 
    то при нажатии этих клавишь isPressed будет true, а при отпускании, false
  `, async () => {
    const onPressed = vi.fn();
    const onPressedOut = vi.fn();

    render(
      <BindKeyButton
        onPressed={onPressed}
        onPressedOut={onPressedOut}
        bindKeys={["KeyA", "ArrowLeft"]}
        toolTipText="gds"
      >
        icon
      </BindKeyButton>
    );

    let isPressedProp = screen.getByTestId("isPressed-prop");
    expect(isPressedProp.textContent).toBe("false");

    // нажимаем кнопку
    window.dispatchEvent(new KeyboardEvent("keydown", { code: "KeyA" }));
    await waitFor(() => {
      // isPressed должно передаваться true
      isPressedProp = screen.getByTestId("isPressed-prop");
      return expect(isPressedProp.textContent).toBe("true");
    });
    expect(onPressed).toBeCalledTimes(1);

    // отпускаем кнопку
    window.dispatchEvent(new KeyboardEvent("keyup", { code: "KeyA" }));
    await waitFor(() => {
      // isPressed должно передаваться false
      isPressedProp = screen.getByTestId("isPressed-prop");
      return expect(isPressedProp.textContent).toBe("false");
    });
    expect(onPressedOut).toBeCalledTimes(1);

    // нажимаем кнопку
    window.dispatchEvent(new KeyboardEvent("keydown", { code: "ArrowLeft" }));
    await waitFor(() => {
      isPressedProp = screen.getByTestId("isPressed-prop");
      expect(isPressedProp.textContent).toBe("true");
    });
    expect(onPressed).toBeCalledTimes(2);

    // отпускаем кнопку
    window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowLeft" }));
    await waitFor(() => {
      isPressedProp = screen.getByTestId("isPressed-prop");
      return expect(isPressedProp.textContent).toBe("false");
    });
    expect(onPressedOut).toBeCalledTimes(2);
  });
});
