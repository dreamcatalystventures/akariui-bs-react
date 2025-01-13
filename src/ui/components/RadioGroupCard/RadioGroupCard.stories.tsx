import { StoryFn, Meta } from "@storybook/react";
import RadioGroupCard from "./RadioGroupCard";


const Template: StoryFn<typeof RadioGroupCard> = (args) => <RadioGroupCard {...args} />;

export default {
  title: "@akariui/bs-react/RadioGroupCard",
  tags: ['autodocs'],
  component: RadioGroupCard,
} as Meta<typeof RadioGroupCard>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
