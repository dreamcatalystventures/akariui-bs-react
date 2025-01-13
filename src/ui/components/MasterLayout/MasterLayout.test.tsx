import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import MasterLayout from "./MasterLayout";
describe("MasterLayout", () => {
  //simple render for component
  test("render the test MasterLayout", async () => {
    render(
      <MasterLayout
         __ PASTE PROPS USAGE __
      />
    );
    const masterLayout = screen.getByText("I am a test MasterLayout");
    expect(masterLayout).toBeInTheDocument();
  });

});
