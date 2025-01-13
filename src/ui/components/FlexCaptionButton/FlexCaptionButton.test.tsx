import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import FlexCaptionButton from "./FlexCaptionButton";
describe("FlexCaptionButton", () => {
  //simple render for component
  test("render the test FlexCaptionButton", async () => {
    render(
      <FlexCaptionButton
         __ PASTE PROPS USAGE __
      />
    );
    const flexCaptionButton = screen.getByText("I am a test FlexCaptionButton");
    expect(flexCaptionButton).toBeInTheDocument();
  });

});
