import { StoryFn, Meta } from "@storybook/react";
import InlineListAlert from "./InlineListAlert";


const Template: StoryFn<typeof InlineListAlert> = (args) => <InlineListAlert {...args} />;

export default {
  title: "@akariui/bs-react/InlineListAlert",
  tags: ['autodocs'],
  component: InlineListAlert,
} as Meta<typeof InlineListAlert>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
