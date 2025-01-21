import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import InputRange from "./InputRange";
describe("InputRange", () => {
  //simple render for component
  test("render the test InputRange", async () => {
    render(
      <InputRange
         test={"I am a test InputRange"}
      />
    );
    const inputRange = screen.getByText("I am a test InputRange");
    expect(inputRange).toBeInTheDocument();
  });

});
