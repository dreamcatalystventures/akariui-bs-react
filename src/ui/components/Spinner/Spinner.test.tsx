import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Spinner from "./Spinner";
describe("Spinner", () => {
  //simple render for component
  test("render the test Spinner", async () => {
    render(
      <Spinner
         test={"I am a test Spinner"}
      />
    );
    const spinner = screen.getByText("I am a test Spinner");
    expect(spinner).toBeInTheDocument();
  });

});
