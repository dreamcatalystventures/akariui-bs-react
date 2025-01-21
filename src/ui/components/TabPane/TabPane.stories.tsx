import { StoryFn, Meta } from "@storybook/react";
import TabPane from "./TabPane";


const Template: StoryFn<typeof TabPane> = (args) => <TabPane {...args} />;

export default {
  title: "@akariui/bs-react/TabPane",
  tags: ['autodocs'],
  component: TabPane,
} as Meta<typeof TabPane>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
