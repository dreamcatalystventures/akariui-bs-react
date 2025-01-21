import { StoryFn, Meta } from "@storybook/react";
import H4 from "./H4";


const Template: StoryFn<typeof H4> = (args) => <H4 {...args} />;

export default {
  title: "@akariui/bs-react/H4",
  tags: ['autodocs'],
  component: H4,
} as Meta<typeof H4>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
