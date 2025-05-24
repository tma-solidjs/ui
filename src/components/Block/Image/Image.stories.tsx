import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { default as Image, ImageProps } from "./Image";

type Story = StoryObj<ImageProps>;

export const Default: Story = {};

export default {
  title: "UI Kit/Image",
  tags: ["autodocs"],
  render: () => (
    <>
      <Image
        src={
          "https://unsplash.com/photos/h8nxGssjQXs/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ4MTE2OTE3fA&force=true"
        }
      />
      <Image src={""} fallbackIcon={<>empty</>} />
    </>
  ),
  argTypes: {},
} as Meta<ComponentProps<typeof Image>>;
