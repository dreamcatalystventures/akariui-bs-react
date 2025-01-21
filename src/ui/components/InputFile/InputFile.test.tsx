import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import InputFile from "./InputFile";
describe("InputFile", () => {
  //simple render for component
  test("render the test InputFile", async () => {
    render(
      <InputFile
         test={"I am a test InputFile"}
      />
    );
    const inputFile = screen.getByText("I am a test InputFile");
    expect(inputFile).toBeInTheDocument();
  });

});
