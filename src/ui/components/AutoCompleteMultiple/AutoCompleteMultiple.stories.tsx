import { StoryFn, Meta } from "@storybook/react";
import AutoCompleteMultiple from "./AutoCompleteMultiple";


const Template: StoryFn<typeof AutoCompleteMultiple> = (args) => <AutoCompleteMultiple {...args} />;

export default {
  title: "@akariui/bs-react/AutoCompleteMultiple",
  tags: ['autodocs'],
  component: AutoCompleteMultiple,
} as Meta<typeof AutoCompleteMultiple>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
