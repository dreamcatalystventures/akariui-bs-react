import { StoryFn, Meta } from "@storybook/react";
import Link from "./Link";


const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export default {
  title: "@akariui/bs-react/Link",
  tags: ['autodocs'],
  component: Link,
} as Meta<typeof Link>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   ___ASSIGN_PROPS_USAGE___
};
