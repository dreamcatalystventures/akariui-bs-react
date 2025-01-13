import { StoryFn, Meta } from "@storybook/react";
import Accordion from "./Accordion";

const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;

export default {
  title: "@akariui/bs-react/Accordion",
  tags: ["autodocs"],
  component: Accordion,
} as Meta<typeof Accordion>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
  id: "test-accordion",
};
