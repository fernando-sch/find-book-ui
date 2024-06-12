import { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta = { component: Title } satisfies Meta<typeof Title>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { title: "O que você quer ler hoje?" } };
