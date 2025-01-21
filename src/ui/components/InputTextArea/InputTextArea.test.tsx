import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import InputTextArea from "./InputTextArea";
describe("InputTextArea", () => {
  //simple render for component
  test("render the test InputTextArea", async () => {
    render(
      <InputTextArea
         test={"I am a test InputTextArea"}
      />
    );
    const inputTextArea = screen.getByText("I am a test InputTextArea");
    expect(inputTextArea).toBeInTheDocument();
  });

});
