import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import RadioGroupCard from "./RadioGroupCard";
describe("RadioGroupCard", () => {
  //simple render for component
  test("render the test RadioGroupCard", async () => {
    render(
      <RadioGroupCard
         __ PASTE PROPS USAGE __
      />
    );
    const radioGroupCard = screen.getByText("I am a test RadioGroupCard");
    expect(radioGroupCard).toBeInTheDocument();
  });

});
