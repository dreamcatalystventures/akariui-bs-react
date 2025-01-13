import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import H2 from "./H2";
describe("H2", () => {
  //simple render for component
  test("render the test H2", async () => {
    render(
      <H2
         __ PASTE PROPS USAGE __
      />
    );
    const h2 = screen.getByText("I am a test H2");
    expect(h2).toBeInTheDocument();
  });

});
