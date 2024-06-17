import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";

const meta = { component: Home } satisfies Meta<typeof Home>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  ),
};
