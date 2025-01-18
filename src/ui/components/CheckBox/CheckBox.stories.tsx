import { StoryFn, Meta } from "@storybook/react";
import CheckBox from "./CheckBox";
import { useForm } from "../../../infrastrature/thirdparty";

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />;

export default {
  title: "@akariui/bs-react/CheckBox",
  tags: ["autodocs"],
  component: CheckBox,
} as Meta<typeof CheckBox>;
const {
  control,
  formState: { errors },
} = useForm<any>({});
export const ComponentExample = Template.bind({});

ComponentExample.args = {
  label: "This is a check box",
  name: "checkbox_test",
  errors: {},
  className: "",
  control: control,
};
