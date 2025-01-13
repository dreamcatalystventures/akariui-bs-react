import { StoryFn, Meta } from "@storybook/react";
import Alert from "./Alert";


const Template: StoryFn<typeof Alert> = (args) => <Alert {...args} />;

export default {
  title: "@akariui/bs-react/Alert",
  tags: ['autodocs'],
  component: Alert,
} as Meta<typeof Alert>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
