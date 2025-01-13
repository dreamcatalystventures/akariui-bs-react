import { StoryFn, Meta } from "@storybook/react";
import DropdownButtonMenu from "./DropdownButtonMenu";


const Template: StoryFn<typeof DropdownButtonMenu> = (args) => <DropdownButtonMenu {...args} />;

export default {
  title: "@akariui/bs-react/DropdownButtonMenu",
  tags: ['autodocs'],
  component: DropdownButtonMenu,
} as Meta<typeof DropdownButtonMenu>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
