import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import IndeterminateCheckbox from "./IndeterminateCheckbox";
describe("IndeterminateCheckbox", () => {
  //simple render for component
  test("render the test IndeterminateCheckbox", async () => {
    render(
      <IndeterminateCheckbox
         __ PASTE PROPS USAGE __
      />
    );
    const indeterminateCheckbox = screen.getByText("I am a test IndeterminateCheckbox");
    expect(indeterminateCheckbox).toBeInTheDocument();
  });

});
