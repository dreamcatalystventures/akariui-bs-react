import { StoryFn, Meta } from "@storybook/react";
import DatePicker from "./DatePicker";


const Template: StoryFn<typeof DatePicker> = (args) => <DatePicker {...args} />;

export default {
  title: "@akariui/bs-react/DatePicker",
  tags: ['autodocs'],
  component: DatePicker,
} as Meta<typeof DatePicker>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
