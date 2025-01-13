import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import DatePicker from "./DatePicker";
describe("DatePicker", () => {
  //simple render for component
  test("render the test DatePicker", async () => {
    render(
      <DatePicker
         __ PASTE PROPS USAGE __
      />
    );
    const datePicker = screen.getByText("I am a test DatePicker");
    expect(datePicker).toBeInTheDocument();
  });

});
