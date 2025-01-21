import { StoryFn, Meta } from "@storybook/react";
import InputTextArea from "./InputTextArea";


const Template: StoryFn<typeof InputTextArea> = (args) => <InputTextArea {...args} />;

export default {
  title: "@akariui/bs-react/InputTextArea",
  tags: ['autodocs'],
  component: InputTextArea,
} as Meta<typeof InputTextArea>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
