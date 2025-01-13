import { StoryFn, Meta } from "@storybook/react";
import Pagination from "./Pagination";


const Template: StoryFn<typeof Pagination> = (args) => <Pagination {...args} />;

export default {
  title: "@akariui/bs-react/Pagination",
  tags: ['autodocs'],
  component: Pagination,
} as Meta<typeof Pagination>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
