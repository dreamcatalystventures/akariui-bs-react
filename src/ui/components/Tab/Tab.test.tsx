import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Tab from "./Tab";
describe("Tab", () => {
  //simple render for component
  test("render the test Tab", async () => {
    render(
      <Tab
         test={"I am a test Tab"}
      />
    );
    const tab = screen.getByText("I am a test Tab");
    expect(tab).toBeInTheDocument();
  });

});
