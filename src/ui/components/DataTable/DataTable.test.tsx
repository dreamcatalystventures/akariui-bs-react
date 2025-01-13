import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import DataTable from "./DataTable";
describe("DataTable", () => {
  //simple render for component
  test("render the test DataTable", async () => {
    render(
      <DataTable
         __ PASTE PROPS USAGE __
      />
    );
    const dataTable = screen.getByText("I am a test DataTable");
    expect(dataTable).toBeInTheDocument();
  });

});
