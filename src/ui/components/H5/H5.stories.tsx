import { StoryFn, Meta } from "@storybook/react";
import H5 from "./H5";


const Template: StoryFn<typeof H5> = (args) => <H5 {...args} />;

export default {
  title: "@akariui/bs-react/H5",
  tags: ['autodocs'],
  component: H5,
} as Meta<typeof H5>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
