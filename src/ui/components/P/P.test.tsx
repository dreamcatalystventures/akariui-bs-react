import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import P from "./P";
describe("P", () => {
  //simple render for component
  test("render the test P", async () => {
    render(
      <P
         __ PASTE PROPS USAGE __
      />
    );
    const p = screen.getByText("I am a test P");
    expect(p).toBeInTheDocument();
  });

});
