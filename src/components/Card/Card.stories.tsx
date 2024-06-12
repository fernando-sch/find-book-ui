import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Card } from "./Card";

const meta = { component: Card } satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ bookId }) => (
    <MemoryRouter>
      <Card bookId={bookId} />
    </MemoryRouter>
  ),
  args: { bookId: "123" },
};
