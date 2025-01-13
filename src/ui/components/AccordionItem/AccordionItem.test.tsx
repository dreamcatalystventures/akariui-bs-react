import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, jest, test } from "@jest/globals";
import AccordionItem from "./AccordionItem";
describe("AccordionItem", () => {
  //simple render for component
  test("render the test AccordionItem", async () => {
    render(
      <AccordionItem
        id="accordion-item-1"
        parent="test-accordion"
        title="Accordion Item 1"
      >
        This is a test accordion item content
      </AccordionItem>
    );
    const accordionItem = screen.getByText("I am a test AccordionItem");
    expect(accordionItem).toBeInTheDocument();
  });
});
