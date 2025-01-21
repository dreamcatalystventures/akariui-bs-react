import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import RenderWhenGrid from "./RenderWhenGrid";
describe("RenderWhenGrid", () => {
  //simple render for component
  test("render the test RenderWhenGrid", async () => {
    render(
      <RenderWhenGrid
         test={"I am a test RenderWhenGrid"}
      />
    );
    const renderWhenGrid = screen.getByText("I am a test RenderWhenGrid");
    expect(renderWhenGrid).toBeInTheDocument();
  });

});
