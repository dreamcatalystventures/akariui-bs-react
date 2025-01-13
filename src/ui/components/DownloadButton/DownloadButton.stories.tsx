import { StoryFn, Meta } from "@storybook/react";
import DownloadButton from "./DownloadButton";


const Template: StoryFn<typeof DownloadButton> = (args) => <DownloadButton {...args} />;

export default {
  title: "@akariui/bs-react/DownloadButton",
  tags: ['autodocs'],
  component: DownloadButton,
} as Meta<typeof DownloadButton>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
