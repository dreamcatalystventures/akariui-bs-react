import { StoryFn, Meta } from "@storybook/react";
import AccordionItem from "./AccordionItem";

const Template: StoryFn<typeof AccordionItem> = (args) => (
  <AccordionItem {...args} />
);

export default {
  title: "@akariui/bs-react/AccordionItem",
  tags: ["autodocs"],
  component: AccordionItem,
} as Meta<typeof AccordionItem>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
  id: "accordion-item-1",
  children: <p>This is my accordion content</p>,
  parent: "test-accordion",
  title: "Accordion Item 1",
};
