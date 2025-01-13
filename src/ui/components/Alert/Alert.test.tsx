import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, jest, test } from "@jest/globals";
import Alert from "./Alert";
import { BootstrapUI } from "../../enums/BootstrapUI";
describe("Alert", () => {
  //simple render for component
  test("render the test Alert", async () => {
    render(
      <Alert
        type={BootstrapUI.Danger}
        icon={<></>}
        text="This is the text explaining why the alert was triggered."
        title="Alert title"
      />
    );
    const alert = screen.getByText("I am a test Alert");
    expect(alert).toBeInTheDocument();
  });
});
