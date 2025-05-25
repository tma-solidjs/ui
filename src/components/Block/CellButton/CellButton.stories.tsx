import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps, JSX } from "solid-js";

import { default as CellButton, CellButtonProps } from "./CellButton";

type Story = StoryObj<CellButtonProps>;

export const Default: Story = {
  args: {
    children: "Main Title",
  },
};

export default {
  title: "UI Kit/Cell Button",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    before: { control: false },
    after: { control: false },
  },
  render: (props): JSX.Element => <CellButton {...props} />,
} as Meta<ComponentProps<typeof CellButton>>;
