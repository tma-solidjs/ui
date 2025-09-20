import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import Skeleton from "./Skeleton";

type Story = StoryObj<ComponentProps<typeof Skeleton>>;

export const Default: Story = {};

export const Square: Story = {
  args: {
    width: "50px",
    height: "50px",
  },
};

export const Line: Story = {
  args: {
    width: "200px",
    height: "12px",
  },
};

export const Rectangle: Story = {
  args: {
    width: "120px",
    height: "60px",
  },
};

export default {
  title: "UI Kit/Skeleton",
  tags: ["autodocs"],
  render: (props) => <Skeleton {...props} />,
  args: {
    width: "100px",
    height: "20px",
  },
  argTypes: {
    width: {
      control: "text",
      description: "CSS width",
    },
    height: {
      control: "text",
      description: "CSS height",
    },
    class: {
      control: "text",
      description: "Custom class",
    },
  },
} as Meta<ComponentProps<typeof Skeleton>>;
