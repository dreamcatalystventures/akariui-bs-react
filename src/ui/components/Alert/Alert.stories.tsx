import { StoryFn, Meta } from "@storybook/react";
import Alert from "./Alert";
import { BootstrapUI } from "../../enums/BootstrapUI";

const Template: StoryFn<typeof Alert> = (args) => <Alert {...args} />;

export default {
  title: "@akariui/bs-react/Alert",
  tags: ["autodocs"],
  component: Alert,
} as Meta<typeof Alert>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
  type: BootstrapUI.Danger,
  icon: <></>,
  text: "This is the text explaining why the alert was triggered.",
  title: "Alert title",
};
