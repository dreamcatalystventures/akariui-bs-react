import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import LoadingButton from "./LoadingButton";
describe("LoadingButton", () => {
  //simple render for component
  test("render the test LoadingButton", async () => {
    render(
      <LoadingButton
         __ PASTE PROPS USAGE __
      />
    );
    const loadingButton = screen.getByText("I am a test LoadingButton");
    expect(loadingButton).toBeInTheDocument();
  });

});
