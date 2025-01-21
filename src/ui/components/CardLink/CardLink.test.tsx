import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, jest, test } from "@jest/globals";
import CardLink from "./CardLink";
describe("CardLink", () => {
  //simple render for component
  test("render the test CardLink", async () => {
    render(
      <CardLink
        title={"This is a card link"}
        to="/some-path"
        icon={<>Icon</>}
      />
    );
    const cardLink = screen.getByText("This is a card link");
    expect(cardLink).toBeInTheDocument();
  });
});
