import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import H6 from "./H6";
describe("H6", () => {
  //simple render for component
  test("render the test H6", async () => {
    render(
      <H6
         test={"I am a test H6"}
      />
    );
    const h6 = screen.getByText("I am a test H6");
    expect(h6).toBeInTheDocument();
  });

});
