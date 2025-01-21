import { StoryFn, Meta } from "@storybook/react";
import H1 from "./H1";


const Template: StoryFn<typeof H1> = (args) => <H1 {...args} />;

export default {
  title: "@akariui/bs-react/H1",
  tags: ['autodocs'],
  component: H1,
} as Meta<typeof H1>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
