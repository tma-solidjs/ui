import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import {
  default as NotificationProvider,
  type NotificationProviderProps,
} from "./NotificationProvider";

import { notify } from "@/utils";

type Story = StoryObj<NotificationProviderProps>;

export const Default: Story = {};

const NotificationTestButtons = () => (
  <div>
    <h1 onClick={() => notify({ message: "msg", title: "title" })}>
      TestTestTestTestTestTestTestTestTest
      <br />
      TestTestTestTestTestTestTestTestTest
      <br />
      TestTestTestTestTestTestTestTestTest
      <br />
      TestTestTestTestTestTestTestTestTest
      <br />
      TestTestTestTestTestTestTestTestTest
      <br />
      TestTestTestTestTestTestTestTestTest
      <br />
      TestTestTestTestTestTestTestTestTest
      <br />
      TestTestTestTestTestTestTestTestTest
      <br />
      TestTestTestTestTestTestTestTestTest
    </h1>
  </div>
);

export default {
  title: "UI Kit/Notification",
  tags: ["autodocs"],
  render: () => (
    <NotificationProvider>
      <NotificationTestButtons />
    </NotificationProvider>
  ),
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as Meta<ComponentProps<typeof NotificationProviderProps>>;
