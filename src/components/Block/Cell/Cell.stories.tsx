import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { default as Cell, CellProps } from "./Cell";
import { Button } from "@/components";
import { IconUser } from "@/assets/icons";
import { JSX } from "solid-js/types/jsx";

type Story = StoryObj<CellProps>;

export const Default: Story = {
  args: {
    children: "Main Title",
  },
};

export const WithSubhead: Story = {
  args: {
    children: "Main Title",
    subhead: "Section Label",
  },
};

export const WithSubtitleAndDescription: Story = {
  args: {
    children: "Main Title",
    subtitle: "Subtitle",
    description: "This is a descriptive text that provides additional context.",
  },
};

export const WithBeforeAndAfter: Story = {
  args: {
    children: "Main Title",
    before: <IconUser />,
  },
};

export const WithHintAndBadge: Story = {
  args: {
    children: "Main Title",
    hint: "Required",
  },
};

export const FullFeatured: Story = {
  args: {
    children: "Main Title",
    subhead: "Settings Section",
    subtitle: "Profile Settings",
    description: "You can update your personal information here.",
    before: <IconUser />,
    after: <Button>After</Button>,
    hint: "Required field",
  },
};

export default {
  title: "UI Kit/Cell",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    before: { control: false },
    after: { control: false },
    titleBadge: { control: false },
  },
  render: (props): JSX.Element => <Cell {...props} />,
} as Meta<ComponentProps<typeof Cell>>;
