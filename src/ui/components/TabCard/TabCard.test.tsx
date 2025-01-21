import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import TabCard from "./TabCard";
describe("TabCard", () => {
  //simple render for component
  test("render the test TabCard", async () => {
    render(
      <TabCard
         test={"I am a test TabCard"}
      />
    );
    const tabCard = screen.getByText("I am a test TabCard");
    expect(tabCard).toBeInTheDocument();
  });

});
