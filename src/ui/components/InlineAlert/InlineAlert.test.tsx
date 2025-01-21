import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import InlineAlert from "./InlineAlert";
describe("InlineAlert", () => {
  //simple render for component
  test("render the test InlineAlert", async () => {
    render(
      <InlineAlert
         test={"I am a test InlineAlert"}
      />
    );
    const inlineAlert = screen.getByText("I am a test InlineAlert");
    expect(inlineAlert).toBeInTheDocument();
  });

});
