import { StoryFn, Meta } from "@storybook/react";
import RenderWhenGrid from "./RenderWhenGrid";


const Template: StoryFn<typeof RenderWhenGrid> = (args) => <RenderWhenGrid {...args} />;

export default {
  title: "@akariui/bs-react/RenderWhenGrid",
  tags: ['autodocs'],
  component: RenderWhenGrid,
} as Meta<typeof RenderWhenGrid>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
