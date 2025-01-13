import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import Accordion from "./Accordion";
describe("Accordion", () => {
  //simple render for component
  test("render the test Accordion", async () => {
    render(
      <Accordion id="accordion-test-id">
        <p>Test</p>
      </Accordion>
    );
    const accordion = screen.getByText("I am a test Accordion");
    expect(accordion).toBeInTheDocument();
  });
});
