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
      description: "HTML-тег, используемый компонентом",
    },
    plain: {
      control: "boolean",
      description: "Убирает стилизацию, если true",
    },
    caps: {
      control: "boolean",
      description: "Отображать текст в верхнем регистре",
    },
    weight: {
      control: { type: "select" },
      options: ["1", "2", "3"],
      description: "Толщина шрифта",
    },
    class: {
      control: "text",
      description: "Дополнительные CSS-классы",
    },
  },
} as Meta<ComponentProps<typeof Typography>>;
