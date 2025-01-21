import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import InlineListAlert from "./InlineListAlert";
describe("InlineListAlert", () => {
  //simple render for component
  test("render the test InlineListAlert", async () => {
    render(
      <InlineListAlert
         test={"I am a test InlineListAlert"}
      />
    );
    const inlineListAlert = screen.getByText("I am a test InlineListAlert");
    expect(inlineListAlert).toBeInTheDocument();
  });

});
