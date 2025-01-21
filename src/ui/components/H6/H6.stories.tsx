import { StoryFn, Meta } from "@storybook/react";
import H6 from "./H6";


const Template: StoryFn<typeof H6> = (args) => <H6 {...args} />;

export default {
  title: "@akariui/bs-react/H6",
  tags: ['autodocs'],
  component: H6,
} as Meta<typeof H6>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
