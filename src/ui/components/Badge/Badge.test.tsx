import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import Badge from "./Badge";
import { BootstrapUI } from "../../enums/BootstrapUI";
describe("Badge", () => {
  //simple render for component
  test("render the test Badge", async () => {
    render(<Badge type={BootstrapUI.Info} text="I am a test Badge" />);
    const badge = screen.getByText("I am a test Badge");
    expect(badge).toBeInTheDocument();
  });
});
