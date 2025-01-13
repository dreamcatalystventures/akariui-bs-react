import { StoryFn, Meta } from "@storybook/react";
import Tab from "./Tab";


const Template: StoryFn<typeof Tab> = (args) => <Tab {...args} />;

export default {
  title: "@akariui/bs-react/Tab",
  tags: ['autodocs'],
  component: Tab,
} as Meta<typeof Tab>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
