import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import H5 from "./H5";
describe("H5", () => {
  //simple render for component
  test("render the test H5", async () => {
    render(
      <H5
         test={"I am a test H5"}
      />
    );
    const h5 = screen.getByText("I am a test H5");
    expect(h5).toBeInTheDocument();
  });

});
