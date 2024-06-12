import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { BookDetails } from "./BookDetails";

const meta = { component: BookDetails } satisfies Meta<typeof BookDetails>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MemoryRouter>
      <BookDetails />
    </MemoryRouter>
  ),
};
