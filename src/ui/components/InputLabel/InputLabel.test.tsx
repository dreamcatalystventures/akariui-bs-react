import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import InputLabel from "./InputLabel";
describe("InputLabel", () => {
  //simple render for component
  test("render the test InputLabel", async () => {
    render(
      <InputLabel
         __ PASTE PROPS USAGE __
      />
    );
    const inputLabel = screen.getByText("I am a test InputLabel");
    expect(inputLabel).toBeInTheDocument();
  });

});
