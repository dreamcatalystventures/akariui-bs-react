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
         test={"I am a test Switch"}
      />
    );
    const switchControl = screen.getByText("I am a test Switch");
    expect(switchControl).toBeInTheDocument();
  });

});
