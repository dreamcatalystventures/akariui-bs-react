import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import H4 from "./H4";
describe("H4", () => {
  //simple render for component
  test("render the test H4", async () => {
    render(
      <H4
         __ PASTE PROPS USAGE __
      />
    );
    const h4 = screen.getByText("I am a test H4");
    expect(h4).toBeInTheDocument();
  });

});
