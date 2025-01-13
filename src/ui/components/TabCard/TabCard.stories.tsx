import { StoryFn, Meta } from "@storybook/react";
import TabCard from "./TabCard";


const Template: StoryFn<typeof TabCard> = (args) => <TabCard {...args} />;

export default {
  title: "@akariui/bs-react/TabCard",
  tags: ['autodocs'],
  component: TabCard,
} as Meta<typeof TabCard>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
