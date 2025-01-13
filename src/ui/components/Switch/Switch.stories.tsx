import { StoryFn, Meta } from "@storybook/react";
import Switch from "./Switch";


const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export default {
  title: "@akariui/bs-react/Switch",
  tags: ['autodocs'],
  component: Switch,
} as Meta<typeof Switch>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
