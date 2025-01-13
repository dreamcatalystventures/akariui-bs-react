import { StoryFn, Meta } from "@storybook/react";
import CheckBoxGroup from "./CheckBoxGroup";


const Template: StoryFn<typeof CheckBoxGroup> = (args) => <CheckBoxGroup {...args} />;

export default {
  title: "@akariui/bs-react/CheckBoxGroup",
  tags: ['autodocs'],
  component: CheckBoxGroup,
} as Meta<typeof CheckBoxGroup>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
