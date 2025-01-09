import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Button from "./Button";
import { BootstrapUI } from "../../enums/BootstrapUI";
describe("Button", () => {
  test("render the test button", async () => {
    render(
      <Button
        sx=""
        theme={BootstrapUI.Primary}
        type="button"
        value="I am a test button"
        visible
      />
    );
    const button = screen.getByText("I am a test button");
    expect(button).toBeInTheDocument();
  });

  test('click', () => {
    render(
        <Button
        sx=""
        theme={BootstrapUI.Primary}
        type="button"
        onClick={() => alert("Clicked")}
        value="I am a test button"
        visible
      />
    )

    const button = screen.getByText("I am a test button");
    userEvent.click(button)
  })

});
