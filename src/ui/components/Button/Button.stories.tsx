import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import { BootstrapUI } from "../../enums/BootstrapUI";

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export default {
  title: "@akariui/bs-react/Button",
  tags: ['autodocs'],
  component: Button,
} as Meta<typeof Button>;

export const PrimaryButton = Template.bind({});
export const LoadingButton = Template.bind({});
export const InactiveButton = Template.bind({});

PrimaryButton.args = {
  onClick: console.log("This is a test button"),
  theme: BootstrapUI.Primary,
  disabled: false,
  value: "I am a test button",
  loading: false,
  sx: "",
  type: "button",
  visible: true,
};

LoadingButton.args = {
  onClick: console.log("This is a test button"),
  theme: BootstrapUI.Primary,
  disabled: false,
  value: "I am a test button",
  loading: true,
  sx: "",
  type: "button",
  visible: true,
};

InactiveButton.args = {
  onClick: console.log("This is a test button"),
  theme: BootstrapUI.Primary,
  disabled: true,
  value: "I am inactive",
  loading: false,
  sx: "",
  type: "button",
  visible: true,
};
