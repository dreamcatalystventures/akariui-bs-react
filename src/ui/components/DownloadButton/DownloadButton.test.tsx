import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import DownloadButton from "./DownloadButton";
describe("DownloadButton", () => {
  //simple render for component
  test("render the test DownloadButton", async () => {
    render(
      <DownloadButton
         __ PASTE PROPS USAGE __
      />
    );
    const downloadButton = screen.getByText("I am a test DownloadButton");
    expect(downloadButton).toBeInTheDocument();
  });

});
