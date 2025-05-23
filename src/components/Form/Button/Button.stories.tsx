import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { default as Button, ButtonProps } from "./Button";
import { JSX } from "solid-js/jsx-runtime";

type Story = StoryObj<ButtonProps>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Button...",
  },
};

export const WithBeforeIcon: Story = {
  args: {
    before: <span style="font-size: 16px;">🔍</span>,
    children: "Button",
  },
};

export const WithAfterIcon: Story = {
  args: {
    after: <span style="font-size: 16px;">➡️</span>,
    children: "Button",
  },
};

export const Stretched: Story = {
  args: {
    stretched: true,
  },
};

export const Sizes: Story = {
  // @ts-ignore
  render: () => (
    <div style="display: flex; gap: 12px;">
      <Button size="s">S</Button>
      <Button size="m">M</Button>
      <Button size="l">L</Button>
    </div>
  ),
};

export const Modes: Story = {
  // @ts-ignore
  render: () => (
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <Button mode="filled">filled</Button>
      <Button mode="bezeled">bezeled</Button>
      <Button mode="plain">plain</Button>
      <Button mode="gray">gray</Button>
      <Button mode="outline">outline</Button>
      <Button mode="white">white</Button>
    </div>
  ),
};

export default {
  title: "UI Kit/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["s", "m", "l"],
    },
    mode: {
      control: { type: "select" },
      options: ["filled", "bezeled", "plain", "gray", "outline", "white"],
    },
    before: { control: false },
    after: { control: false },
    loading: { control: "boolean" },
    stretched: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    size: "m",
    mode: "filled",
    loading: false,
    stretched: false,
    disabled: false,
  },
  render: (props): JSX.Element => <Button {...props} />,
} as Meta<ComponentProps<typeof Button>>;
