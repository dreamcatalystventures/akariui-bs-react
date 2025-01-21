import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import Accordion from "./Accordion";
describe("Accordion", () => {
  //simple render for component
  test("render the test Accordion", async () => {
    render(
      <Accordion id="accordion-test-id">
        <p>I am a test Accordion</p>
      </Accordion>
    );
    const accordion = screen.getByText("I am a test Accordion");
    expect(accordion).toBeInTheDocument();
  });
});
