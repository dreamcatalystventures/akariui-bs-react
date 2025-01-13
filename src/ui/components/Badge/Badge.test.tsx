import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Badge from "./Badge";
describe("Badge", () => {
  //simple render for component
  test("render the test Badge", async () => {
    render(
      <Badge
         __ PASTE PROPS USAGE __
      />
    );
    const badge = screen.getByText("I am a test Badge");
    expect(badge).toBeInTheDocument();
  });

});
