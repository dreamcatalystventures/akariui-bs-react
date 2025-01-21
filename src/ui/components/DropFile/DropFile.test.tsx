import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import DropFile from "./DropFile";
describe("DropFile", () => {
  //simple render for component
  test("render the test DropFile", async () => {
    render(
      <DropFile
         test={"I am a test DropFile"}
      />
    );
    const dropFile = screen.getByText("I am a test DropFile");
    expect(dropFile).toBeInTheDocument();
  });

});
