import { StoryFn, Meta } from "@storybook/react";
import InputRange from "./InputRange";


const Template: StoryFn<typeof InputRange> = (args) => <InputRange {...args} />;

export default {
  title: "@akariui/bs-react/InputRange",
  tags: ['autodocs'],
  component: InputRange,
} as Meta<typeof InputRange>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
