import { StoryFn, Meta } from "@storybook/react";
import Icon from "./Icon";


const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export default {
  title: "@akariui/bs-react/Icon",
  tags: ['autodocs'],
  component: Icon,
} as Meta<typeof Icon>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
