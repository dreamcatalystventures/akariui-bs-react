import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Modal from "./Modal";
describe("Modal", () => {
  //simple render for component
  test("render the test Modal", async () => {
    render(
      <Modal
         test={"I am a test Modal"}
      />
    );
    const modal = screen.getByText("I am a test Modal");
    expect(modal).toBeInTheDocument();
  });

});
