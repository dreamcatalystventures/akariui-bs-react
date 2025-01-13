import { StoryFn, Meta } from "@storybook/react";
import InputLabel from "./InputLabel";


const Template: StoryFn<typeof InputLabel> = (args) => <InputLabel {...args} />;

export default {
  title: "@akariui/bs-react/InputLabel",
  tags: ['autodocs'],
  component: InputLabel,
} as Meta<typeof InputLabel>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
