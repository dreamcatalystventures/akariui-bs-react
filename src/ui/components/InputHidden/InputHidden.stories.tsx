import { StoryFn, Meta } from "@storybook/react";
import InputHidden from "./InputHidden";


const Template: StoryFn<typeof InputHidden> = (args) => <InputHidden {...args} />;

export default {
  title: "@akariui/bs-react/InputHidden",
  tags: ['autodocs'],
  component: InputHidden,
} as Meta<typeof InputHidden>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
