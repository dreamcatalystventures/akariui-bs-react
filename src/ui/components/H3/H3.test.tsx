import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import H3 from "./H3";
describe("H3", () => {
  //simple render for component
  test("render the test H3", async () => {
    render(
      <H3
         __ PASTE PROPS USAGE __
      />
    );
    const h3 = screen.getByText("I am a test H3");
    expect(h3).toBeInTheDocument();
  });

});
