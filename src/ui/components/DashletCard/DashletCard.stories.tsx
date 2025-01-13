import { StoryFn, Meta } from "@storybook/react";
import DashletCard from "./DashletCard";


const Template: StoryFn<typeof DashletCard> = (args) => <DashletCard {...args} />;

export default {
  title: "@akariui/bs-react/DashletCard",
  tags: ['autodocs'],
  component: DashletCard,
} as Meta<typeof DashletCard>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
