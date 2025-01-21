import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, jest, test } from "@jest/globals";
import CheckBox from "./CheckBox";
import { useForm } from "../../../infrastrature/thirdparty";

//mock component to use react form
const CheckBoxForm = () => {
  const { control } = useForm();
  return (
    <CheckBox
      control={control}
      label={"This is a check box"}
      name={"checkbox_test"}
      errors={[]}
      className={""}
    />
  );
};
describe("CheckBox", () => {
  //handle conttoller test
  //simple render for component
  test("render the test CheckBox", async () => {
    render(<CheckBoxForm />);
    const checkBox = screen.getByText("This is a check box");
    expect(checkBox).toBeInTheDocument();
  });
});
