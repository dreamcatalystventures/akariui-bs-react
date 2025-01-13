import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Switch from "./Switch";
describe("Switch", () => {
  //simple render for component
  test("render the test Switch", async () => {
    render(
      <Switch
         __ PASTE PROPS USAGE __
      />
    );
    const switch = screen.getByText("I am a test Switch");
    expect(switch).toBeInTheDocument();
  });

});
