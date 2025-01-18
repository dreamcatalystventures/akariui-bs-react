import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, jest, test } from "@jest/globals";
import Breadcrumb from "./Breadcrumb";
describe("Breadcrumb", () => {
  //simple render for component
  test("render the test Breadcrumb", async () => {
    render(<Breadcrumb active="Manage" navItems={["Users", "Manage"]} />);
    const breadcrumb = screen.getByText("I am a test Breadcrumb");
    expect(breadcrumb).toBeInTheDocument();
  });
});
