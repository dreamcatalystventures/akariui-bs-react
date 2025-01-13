import { StoryFn, Meta } from "@storybook/react";
import TimePicker from "./TimePicker";


const Template: StoryFn<typeof TimePicker> = (args) => <TimePicker {...args} />;

export default {
  title: "@akariui/bs-react/TimePicker",
  tags: ['autodocs'],
  component: TimePicker,
} as Meta<typeof TimePicker>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
