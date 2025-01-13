import { StoryFn, Meta } from "@storybook/react";
import LoadingButton from "./LoadingButton";


const Template: StoryFn<typeof LoadingButton> = (args) => <LoadingButton {...args} />;

export default {
  title: "@akariui/bs-react/LoadingButton",
  tags: ['autodocs'],
  component: LoadingButton,
} as Meta<typeof LoadingButton>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
