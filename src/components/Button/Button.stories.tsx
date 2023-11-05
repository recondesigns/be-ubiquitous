import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

/**
 *  Here is a description for the default variants.
 */
const ButtonStoryTemplate: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
};

/**
 *  Here is a description for the default variants.
 */
export const Primary: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    label: "Button",
    variant: "primary",
    onClick: () => alert("Click was fired."),
  },
};

/**
 *  Here is a description for the default variants.
 */
export const Secondary: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    label: "Button",
    variant: "secondary",
    onClick: () => alert("Click was fired."),
  },
};

/**
 *  Here is a description for the default variants.
 */
export const Text: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    label: "Button",
    variant: "text",
    onClick: () => alert("Click was fired."),
  },
};

/**
 *  Here is a description for the default variants.
 */
export const Label: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    label: "Button",
  },
};

/**
 *  Here is a description for the default variants.
 */
export const Children: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    children: <span>Howdy</span>,
  },
};

/**
 *  Here is a description for the default variants.
 */
export const ClassName: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    label: "Button",
    className: "BUC-Button",
  },
};

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio" },
    type: { control: "select" },
  },
};

export default meta;
