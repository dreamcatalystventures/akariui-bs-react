import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import ToggleButtonGroup from "./ToggleButtonGroup";
describe("ToggleButtonGroup", () => {
  //simple render for component
  test("render the test ToggleButtonGroup", async () => {
    render(
      <ToggleButtonGroup
         __ PASTE PROPS USAGE __
      />
    );
    const toggleButtonGroup = screen.getByText("I am a test ToggleButtonGroup");
    expect(toggleButtonGroup).toBeInTheDocument();
  });

});
