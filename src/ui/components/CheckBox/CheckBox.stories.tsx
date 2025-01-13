import { StoryFn, Meta } from "@storybook/react";
import CheckBox from "./CheckBox";


const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />;

export default {
  title: "@akariui/bs-react/CheckBox",
  tags: ['autodocs'],
  component: CheckBox,
} as Meta<typeof CheckBox>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
