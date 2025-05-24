import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { default as Placeholder, PlaceholderProps } from "./Placeholder";
import { Button } from "@/components";

type Story = StoryObj<PlaceholderProps>;

export const Default: Story = {};

export default {
  title: "UI Kit/ Placeholder",
  tags: ["autodocs"],
  render: (props) => (
    <Placeholder
      {...props}
      header={"Title"}
      description={"Description"}
      action={<Button>Action</Button>}
    >
      <Button>Test</Button>
    </Placeholder>
  ),
  argTypes: {},
} as Meta<ComponentProps<typeof Placeholder>>;
