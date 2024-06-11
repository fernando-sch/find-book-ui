import { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta: Meta<typeof Title> = { component: Title };
export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  render: Title,
  args: { title: "O que você quer ler hoje?" },
};
