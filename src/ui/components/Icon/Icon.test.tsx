import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import Icon from "./Icon";
describe("Icon", () => {
  //simple render for component
  test("render the test Icon", async () => {
    render(
      <Icon
         __ PASTE PROPS USAGE __
      />
    );
    const icon = screen.getByText("I am a test Icon");
    expect(icon).toBeInTheDocument();
  });

});
