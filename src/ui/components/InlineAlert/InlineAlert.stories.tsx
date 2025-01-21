import { StoryFn, Meta } from "@storybook/react";
import InlineAlert from "./InlineAlert";


const Template: StoryFn<typeof InlineAlert> = (args) => <InlineAlert {...args} />;

export default {
  title: "@akariui/bs-react/InlineAlert",
  tags: ['autodocs'],
  component: InlineAlert,
} as Meta<typeof InlineAlert>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
