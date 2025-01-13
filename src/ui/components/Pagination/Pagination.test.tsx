import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Pagination from "./Pagination";
describe("Pagination", () => {
  //simple render for component
  test("render the test Pagination", async () => {
    render(
      <Pagination
         __ PASTE PROPS USAGE __
      />
    );
    const pagination = screen.getByText("I am a test Pagination");
    expect(pagination).toBeInTheDocument();
  });

});
