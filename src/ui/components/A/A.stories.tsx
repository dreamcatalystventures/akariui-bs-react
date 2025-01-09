import { StoryFn, Meta } from "@storybook/react";
import A from "./A";

const Template: StoryFn<typeof A> = (args) => <A {...args} />;

export default {
  title: "@akariui/bs-react/A",
  component: A,
  tags: ['autodocs']
} as Meta<typeof A>;

export const NormalLink = Template.bind({});

NormalLink.args = {
  to: "/home",
  children: <>Take me home now</>,
  className: "text-primary",
};

export const SuccessLink = Template.bind({});
SuccessLink.args = {
  to: "/home",
  children: <>This text needs to be green</>,
  className: "text-success",
};
