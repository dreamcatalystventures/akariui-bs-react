import { StoryFn, Meta } from "@storybook/react";
import H2 from "./H2";


const Template: StoryFn<typeof H2> = (args) => <H2 {...args} />;

export default {
  title: "@akariui/bs-react/H2",
  tags: ['autodocs'],
  component: H2,
} as Meta<typeof H2>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
