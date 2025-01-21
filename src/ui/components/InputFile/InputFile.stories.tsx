import { StoryFn, Meta } from "@storybook/react";
import InputFile from "./InputFile";


const Template: StoryFn<typeof InputFile> = (args) => <InputFile {...args} />;

export default {
  title: "@akariui/bs-react/InputFile",
  tags: ['autodocs'],
  component: InputFile,
} as Meta<typeof InputFile>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
