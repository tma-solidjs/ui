import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { default as Panel, PanelProps } from "./Panel";
import { Button } from "@/index";

type Story = StoryObj<PanelProps>;

export const Default: Story = {};

export default {
  title: "UI Kit/Panel",
  tags: ["autodocs"],
  render: (props) => (
    <Panel {...props}>
      <Button>ClassName</Button>
    </Panel>
  ),
  argTypes: {},
} as Meta<ComponentProps<typeof Panel>>;
