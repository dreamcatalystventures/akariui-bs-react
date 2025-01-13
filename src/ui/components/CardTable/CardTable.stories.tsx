import { StoryFn, Meta } from "@storybook/react";
import CardTable from "./CardTable";


const Template: StoryFn<typeof CardTable> = (args) => <CardTable {...args} />;

export default {
  title: "@akariui/bs-react/CardTable",
  tags: ['autodocs'],
  component: CardTable,
} as Meta<typeof CardTable>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
