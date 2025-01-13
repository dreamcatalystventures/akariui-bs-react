import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import AutoComplete from "./AutoComplete";
describe("AutoComplete", () => {
  //simple render for component
  test("render the test AutoComplete", async () => {
    render(
      <AutoComplete
         __ PASTE PROPS USAGE __
      />
    );
    const autoComplete = screen.getByText("I am a test AutoComplete");
    expect(autoComplete).toBeInTheDocument();
  });

});
