import { StoryFn, Meta } from "@storybook/react";
import InputText from "./InputText";


const Template: StoryFn<typeof InputText> = (args) => <InputText {...args} />;

export default {
  title: "@akariui/bs-react/InputText",
  tags: ['autodocs'],
  component: InputText,
} as Meta<typeof InputText>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
