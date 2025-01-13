import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import CheckBox from "./CheckBox";
describe("CheckBox", () => {
  //simple render for component
  test("render the test CheckBox", async () => {
    render(
      <CheckBox
         __ PASTE PROPS USAGE __
      />
    );
    const checkBox = screen.getByText("I am a test CheckBox");
    expect(checkBox).toBeInTheDocument();
  });

});
