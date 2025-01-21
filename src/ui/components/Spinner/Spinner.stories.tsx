import { StoryFn, Meta } from "@storybook/react";
import Spinner from "./Spinner";


const Template: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />;

export default {
  title: "@akariui/bs-react/Spinner",
  tags: ['autodocs'],
  component: Spinner,
} as Meta<typeof Spinner>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
