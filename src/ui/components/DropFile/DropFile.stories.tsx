import { StoryFn, Meta } from "@storybook/react";
import DropFile from "./DropFile";


const Template: StoryFn<typeof DropFile> = (args) => <DropFile {...args} />;

export default {
  title: "@akariui/bs-react/DropFile",
  tags: ['autodocs'],
  component: DropFile,
} as Meta<typeof DropFile>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
