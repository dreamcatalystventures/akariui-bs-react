import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, jest, test } from "@jest/globals";
import CheckBox from "./CheckBox";
import { useForm } from "../../../infrastrature/thirdparty";

describe("CheckBox", () => {
  //handle conttoller test
  const {
    control,
    formState: { errors },
  } = useForm<any>({});
  //simple render for component
  test("render the test CheckBox", async () => {
    render(
      <CheckBox
        label={"This is a check box"}
        name={"checkbox_test"}
        errors={{}}
        className={""}
        control={control}
      />
    );
    const checkBox = screen.getByText("I am a test CheckBox");
    expect(checkBox).toBeInTheDocument();
  });
});
