import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import AutoCompleteMultiple from "./AutoCompleteMultiple";
describe("AutoCompleteMultiple", () => {
  //simple render for component
  test("render the test AutoCompleteMultiple", async () => {
    render(
      <AutoCompleteMultiple
         __ PASTE PROPS USAGE __
      />
    );
    const autoCompleteMultiple = screen.getByText("I am a test AutoCompleteMultiple");
    expect(autoCompleteMultiple).toBeInTheDocument();
  });

});
