import { StoryFn, Meta } from "@storybook/react";
import ToggleButtonGroup from "./ToggleButtonGroup";


const Template: StoryFn<typeof ToggleButtonGroup> = (args) => <ToggleButtonGroup {...args} />;

export default {
  title: "@akariui/bs-react/ToggleButtonGroup",
  tags: ['autodocs'],
  component: ToggleButtonGroup,
} as Meta<typeof ToggleButtonGroup>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
