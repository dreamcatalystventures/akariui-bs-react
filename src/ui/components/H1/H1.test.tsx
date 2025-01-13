import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import H1 from "./H1";
describe("H1", () => {
  //simple render for component
  test("render the test H1", async () => {
    render(
      <H1
         __ PASTE PROPS USAGE __
      />
    );
    const h1 = screen.getByText("I am a test H1");
    expect(h1).toBeInTheDocument();
  });

});
