import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import InputHidden from "./InputHidden";
describe("InputHidden", () => {
  //simple render for component
  test("render the test InputHidden", async () => {
    render(
      <InputHidden
         test={"I am a test InputHidden"}
      />
    );
    const inputHidden = screen.getByText("I am a test InputHidden");
    expect(inputHidden).toBeInTheDocument();
  });

});
