import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import TimePicker from "./TimePicker";
describe("TimePicker", () => {
  //simple render for component
  test("render the test TimePicker", async () => {
    render(
      <TimePicker
         test={"I am a test TimePicker"}
      />
    );
    const timePicker = screen.getByText("I am a test TimePicker");
    expect(timePicker).toBeInTheDocument();
  });

});
