import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, jest, test } from "@jest/globals";
import Title from "./Title";
describe("Title", () => {
  //simple render for component
  test("render the test Title", async () => {
    render(<Title type="xl">I am a test Title</Title>);
    const title = screen.getByText("I am a test Title");
    expect(title).toBeInTheDocument();
  });
});
