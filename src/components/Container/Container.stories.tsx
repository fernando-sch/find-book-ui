import { Meta, StoryObj } from "@storybook/react";
import { Container } from "../Container/Container";
import { HeaderTitle } from "../Header/HeaderTitle";

const meta: Meta<typeof Container> = {
  component: Container,
  subcomponents: { HeaderTitle },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <HeaderTitle />
    </Container>
  ),
};
