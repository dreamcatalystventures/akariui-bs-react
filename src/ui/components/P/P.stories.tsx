import { StoryFn, Meta } from "@storybook/react";
import P from "./P";


const Template: StoryFn<typeof P> = (args) => <P {...args} />;

export default {
  title: "@akariui/bs-react/P",
  tags: ['autodocs'],
  component: P,
} as Meta<typeof P>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
