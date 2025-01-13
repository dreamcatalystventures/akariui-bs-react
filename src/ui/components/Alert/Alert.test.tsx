import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Alert from "./Alert";
describe("Alert", () => {
  //simple render for component
  test("render the test Alert", async () => {
    render(
      <Alert
         __ PASTE PROPS USAGE __
      />
    );
    const alert = screen.getByText("I am a test Alert");
    expect(alert).toBeInTheDocument();
  });

});
