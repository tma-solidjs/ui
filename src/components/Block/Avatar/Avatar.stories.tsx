import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { default as Avatar, AvatarProps } from "./Avatar";

type Story = StoryObj<AvatarProps>;

export const Default: Story = {};

export default {
  title: "UI Kit/Avatar",
  tags: ["autodocs"],
  render: () => (
    <>
      <Avatar src={"https://www.pexels.com/search/big%20size/"} size={20} />
      <Avatar src={"https://www.pexels.com/search/big%20size/"} size={28} />
      <Avatar src={"https://www.pexels.com/search/big%20size/"} size={48} />
      <Avatar
        src={"https://www.pexels.com/search/big%20size/"}
        size={48}
        mode={"rounded"}
      />
      <Avatar src={"https://www.pexels.com/search/big%20size/"} size={96} />
      <Avatar
        src={"https://www.pexels.com/search/big%20size/"}
        size={96}
        mode={"rounded"}
      />
      <Avatar
        src={
          "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        size={48}
      />
    </>
  ),
  argTypes: {},
} as Meta<ComponentProps<typeof Avatar>>;
