import { StoryFn, Meta } from "@storybook/react";
import FlexCaptionButton from "./FlexCaptionButton";


const Template: StoryFn<typeof FlexCaptionButton> = (args) => <FlexCaptionButton {...args} />;

export default {
  title: "@akariui/bs-react/FlexCaptionButton",
  tags: ['autodocs'],
  component: FlexCaptionButton,
} as Meta<typeof FlexCaptionButton>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
