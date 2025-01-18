import { StoryFn, Meta } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

const Template: StoryFn<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export default {
  title: "@akariui/bs-react/Breadcrumb",
  tags: ["autodocs"],
  component: Breadcrumb,
} as Meta<typeof Breadcrumb>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
  active: "Manage",
  navItems: ["Users", "Manage"],
};
