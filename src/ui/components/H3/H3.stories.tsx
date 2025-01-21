import { StoryFn, Meta } from "@storybook/react";
import H3 from "./H3";


const Template: StoryFn<typeof H3> = (args) => <H3 {...args} />;

export default {
  title: "@akariui/bs-react/H3",
  tags: ['autodocs'],
  component: H3,
} as Meta<typeof H3>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
