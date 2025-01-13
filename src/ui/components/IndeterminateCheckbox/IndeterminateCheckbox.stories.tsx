import { StoryFn, Meta } from "@storybook/react";
import IndeterminateCheckbox from "./IndeterminateCheckbox";


const Template: StoryFn<typeof IndeterminateCheckbox> = (args) => <IndeterminateCheckbox {...args} />;

export default {
  title: "@akariui/bs-react/IndeterminateCheckbox",
  tags: ['autodocs'],
  component: IndeterminateCheckbox,
} as Meta<typeof IndeterminateCheckbox>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
