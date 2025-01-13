import { StoryFn, Meta } from "@storybook/react";
import CopyToClipboard from "./CopyToClipboard";


const Template: StoryFn<typeof CopyToClipboard> = (args) => <CopyToClipboard {...args} />;

export default {
  title: "@akariui/bs-react/CopyToClipboard",
  tags: ['autodocs'],
  component: CopyToClipboard,
} as Meta<typeof CopyToClipboard>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
