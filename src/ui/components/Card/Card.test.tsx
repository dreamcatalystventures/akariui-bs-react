import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, jest, test } from "@jest/globals";
import Card from "./Card";
import { BootstrapUI } from "../../enums/BootstrapUI";
import Button from "../Button/Button";
describe("Card", () => {
  //simple render for component
  test("render the test Card", async () => {
    render(
      <Card
        title="I am a test Card"
        children={<>This is card content</>}
        buttons={
          <>
            <Button
              sx=""
              theme={BootstrapUI.Primary}
              type="button"
              onClick={() => alert("Clicked")}
              value="I am a test Card"
              visible
            />
          </>
        }
        className=""
      />
    );
    const cardLink = screen.getByText("I am a test Card");
    expect(cardLink).toBeInTheDocument();
  });
});
