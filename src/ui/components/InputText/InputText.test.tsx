import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import InputText from "./InputText";
describe("InputText", () => {
  //simple render for component
  test("render the test InputText", async () => {
    render(
      <InputText
         test={"I am a test InputText"}
      />
    );
    const inputText = screen.getByText("I am a test InputText");
    expect(inputText).toBeInTheDocument();
  });

});
