import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Typography, TypographyProps } from ".";

type Story = StoryObj<TypographyProps>;

export const Default: Story = {};

export const WithCaps: Story = {
  args: {
    caps: true,
  },
};

export const NotPlain: Story = {
  args: {
    plain: false,
  },
};

export const Weight1: Story = {
  args: {
    weight: "1",
  },
};

export const Weight2: Story = {
  args: {
    weight: "2",
  },
};

export const Weight3: Story = {
  args: {
    weight: "3",
  },
};

export const AsParagraph: Story = {
  args: {
    component: "p",
  },
};

export const AsHeading1: Story = {
  args: {
    component: "h1",
  },
};

export const AsDiv: Story = {
  args: {
    component: "div",
  },
};

export default {
  title: "UI Kit/Typography",
  tags: ["autodocs"],
  render: (props) => <Typography {...props}>Пример текста</Typography>,
  args: {
    component: "span",
    plain: true,
    caps: false,
    weight: "3",
  },
  argTypes: {
    component: {
      control: { type: "select" },
      options: ["span", "p", "h1", "h2", "h3", "div"],
      description: "HTML Tag",
    },
    plain: {
      control: "boolean",
      description: "",
    },
    caps: {
      control: "boolean",
      description: "",
    },
    weight: {
      control: { type: "select" },
      options: ["1", "2", "3"],
      description: "",
    },
    class: {
      control: "text",
      description: "",
    },
  },
} as Meta<ComponentProps<typeof Typography>>;
