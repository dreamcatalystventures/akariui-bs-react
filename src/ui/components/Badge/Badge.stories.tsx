import { StoryFn, Meta } from "@storybook/react";
import Badge from "./Badge";
import { BootstrapUI } from "../../enums/BootstrapUI";

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export default {
  title: "@akariui/bs-react/Badge",
  tags: ["autodocs"],
  component: Badge,
} as Meta<typeof Badge>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
  type: BootstrapUI.Danger,
  text: "Danger Tag",
};
