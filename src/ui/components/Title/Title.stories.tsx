import { StoryFn, Meta } from "@storybook/react";
import Title from "./Title";


const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export default {
  title: "@akariui/bs-react/Title",
  tags: ['autodocs'],
  component: Title,
} as Meta<typeof Title>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
