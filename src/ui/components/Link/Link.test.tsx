import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Link from "./Link";
describe("Link", () => {
  //simple render for component
  test("render the test Link", async () => {
    render(
      <Link
         __ PASTE PROPS USAGE __
      />
    );
    const link = screen.getByText("I am a test Link");
    expect(link).toBeInTheDocument();
  });

});
