import { Meta, StoryObj } from "@storybook/react";
import { Container } from "../Container/Container";
import { HeaderTitle } from "../Header/HeaderTitle";

const meta = {
  component: Container,
  subcomponents: { HeaderTitle },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: <HeaderTitle /> } };
