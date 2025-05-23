import type { Meta, StoryObj } from "@storybook/html";
import { default as Switch, SwitchProps } from "./Switch";
import type { ComponentProps } from "solid-js";

type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  name: "По умолчанию",
  args: {
    children: "Включить опцию",
  },
};

export const Disabled: Story = {
  name: "Отключённый",
  args: {
    disabled: true,
    children: "Недоступная опция",
  },
};

export const WithCustomClass: Story = {
  name: "С кастомным классом",
  args: {
    class: "my-custom-class",
    children: "Стилизованный Switch",
  },
};

export const WithoutLabel: Story = {
  name: "Без подписи",
  args: {},
};

export const WithJSXLabel: Story = {
  name: "С JSX содержимым",
  // @ts-ignore
  render: (args) => (
    <Switch {...args}>
      <span>
        <strong>Активировать</strong> режим
      </span>
    </Switch>
  ),
};

export default {
  title: "UI Kit/Switch",
  component: Switch,
  argTypes: {
    disabled: { control: "boolean" },
    class: { control: "text" },
    classList: { control: "object" },
    children: { control: "text" },
    onChange: { action: "changed" },
  },
  args: {
    disabled: false,
  },
} as Meta<ComponentProps<typeof Switch>>;
