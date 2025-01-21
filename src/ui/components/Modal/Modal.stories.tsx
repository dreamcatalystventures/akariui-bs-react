import { StoryFn, Meta } from "@storybook/react";
import Modal from "./Modal";


const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export default {
  title: "@akariui/bs-react/Modal",
  tags: ['autodocs'],
  component: Modal,
} as Meta<typeof Modal>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
   test: "Not Implemented"
};
