import { StoryFn, Meta } from "@storybook/react";
import AutoComplete from "./AutoComplete";


const Template: StoryFn<typeof AutoComplete> = (args) => <AutoComplete {...args} />;

export default {
  title: "@akariui/bs-react/AutoComplete",
  tags: ['autodocs'],
  component: AutoComplete,
} as Meta<typeof AutoComplete>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
