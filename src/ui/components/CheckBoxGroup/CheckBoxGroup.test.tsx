import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import CheckBoxGroup from "./CheckBoxGroup";
describe("CheckBoxGroup", () => {
  //simple render for component
  test("render the test CheckBoxGroup", async () => {
    render(
      <CheckBoxGroup
         __ PASTE PROPS USAGE __
      />
    );
    const checkBoxGroup = screen.getByText("I am a test CheckBoxGroup");
    expect(checkBoxGroup).toBeInTheDocument();
  });

});
