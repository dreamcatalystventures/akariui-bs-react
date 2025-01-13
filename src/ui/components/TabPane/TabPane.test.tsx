import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import TabPane from "./TabPane";
describe("TabPane", () => {
  //simple render for component
  test("render the test TabPane", async () => {
    render(
      <TabPane
         __ PASTE PROPS USAGE __
      />
    );
    const tabPane = screen.getByText("I am a test TabPane");
    expect(tabPane).toBeInTheDocument();
  });

});
