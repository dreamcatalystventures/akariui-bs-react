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
         test={"I am a test P"}
      />
    );
    const p = screen.getByText("I am a test P");
    expect(p).toBeInTheDocument();
  });

});
