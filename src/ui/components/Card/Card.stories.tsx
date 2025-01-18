import { StoryFn, Meta } from "@storybook/react";
import CardLink from "./Card";
import Button from "../Button/Button";
import { BootstrapUI } from "../../enums/BootstrapUI";
import Card from "./Card";

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export default {
  title: "@akariui/bs-react/Card",
  tags: ["autodocs"],
  component: CardLink,
} as Meta<typeof CardLink>;

export const ComponentExample = Template.bind({});

ComponentExample.args = {
  title: "",
  children: <>This is card content</>,
  buttons: (
    <>
      <Button
        sx=""
        theme={BootstrapUI.Primary}
        type="button"
        onClick={() => alert("Clicked")}
        value="I am a test button"
        visible
      />
    </>
  ),
  className: "",
};
