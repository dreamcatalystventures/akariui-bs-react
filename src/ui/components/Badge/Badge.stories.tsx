import { StoryFn, Meta } from "@storybook/react";
import Badge from "./Badge";


const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export default {
  title: "@akariui/bs-react/Badge",
  tags: ['autodocs'],
  component: Badge,
} as Meta<typeof Badge>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
