import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { expect, jest, test } from "@jest/globals";
import DropdownButtonMenu from "./DropdownButtonMenu";
describe("DropdownButtonMenu", () => {
  //simple render for component
  test("render the test DropdownButtonMenu", async () => {
    render(
      <DropdownButtonMenu
         __ PASTE PROPS USAGE __
      />
    );
    const dropdownButtonMenu = screen.getByText("I am a test DropdownButtonMenu");
    expect(dropdownButtonMenu).toBeInTheDocument();
  });

});
