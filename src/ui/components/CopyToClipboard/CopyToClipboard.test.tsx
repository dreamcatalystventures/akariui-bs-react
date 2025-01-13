import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import CopyToClipboard from "./CopyToClipboard";
describe("CopyToClipboard", () => {
  //simple render for component
  test("render the test CopyToClipboard", async () => {
    render(
      <CopyToClipboard
         __ PASTE PROPS USAGE __
      />
    );
    const copyToClipboard = screen.getByText("I am a test CopyToClipboard");
    expect(copyToClipboard).toBeInTheDocument();
  });

});
