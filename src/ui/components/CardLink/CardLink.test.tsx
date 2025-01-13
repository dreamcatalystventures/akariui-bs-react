import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import CardLink from "./CardLink";
describe("CardLink", () => {
  //simple render for component
  test("render the test CardLink", async () => {
    render(
      <CardLink
         __ PASTE PROPS USAGE __
      />
    );
    const cardLink = screen.getByText("I am a test CardLink");
    expect(cardLink).toBeInTheDocument();
  });

});
