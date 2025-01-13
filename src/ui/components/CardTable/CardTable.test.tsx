import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import CardTable from "./CardTable";
describe("CardTable", () => {
  //simple render for component
  test("render the test CardTable", async () => {
    render(
      <CardTable
         __ PASTE PROPS USAGE __
      />
    );
    const cardTable = screen.getByText("I am a test CardTable");
    expect(cardTable).toBeInTheDocument();
  });

});
