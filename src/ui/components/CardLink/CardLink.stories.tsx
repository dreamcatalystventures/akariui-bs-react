import { StoryFn, Meta } from "@storybook/react";
import CardLink from "./CardLink";

const Template: StoryFn<typeof CardLink> = (args) => <CardLink {...args} />;

export default {
  title: "@akariui/bs-react/CardLink",
  tags: ["autodocs"],
  component: CardLink,
} as Meta<typeof CardLink>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
  title: "This is a card link",
  to: "/some-path",
  icon: <>Icon</>,
};
