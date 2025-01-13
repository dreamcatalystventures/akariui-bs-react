import { StoryFn, Meta } from "@storybook/react";
import MasterLayout from "./MasterLayout";


const Template: StoryFn<typeof MasterLayout> = (args) => <MasterLayout {...args} />;

export default {
  title: "@akariui/bs-react/MasterLayout",
  tags: ['autodocs'],
  component: MasterLayout,
} as Meta<typeof MasterLayout>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
