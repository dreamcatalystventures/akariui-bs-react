import { StoryFn, Meta } from "@storybook/react";
import DataTable from "./DataTable";


const Template: StoryFn<typeof DataTable> = (args) => <DataTable {...args} />;

export default {
  title: "@akariui/bs-react/DataTable",
  tags: ['autodocs'],
  component: DataTable,
} as Meta<typeof DataTable>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
