import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import DashletCard from "./DashletCard";
describe("DashletCard", () => {
  //simple render for component
  test("render the test DashletCard", async () => {
    render(
      <DashletCard
         __ PASTE PROPS USAGE __
      />
    );
    const dashletCard = screen.getByText("I am a test DashletCard");
    expect(dashletCard).toBeInTheDocument();
  });

});
