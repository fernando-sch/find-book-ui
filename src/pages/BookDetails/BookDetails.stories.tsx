import { Meta, StoryObj } from "@storybook/react";
import { BookDetails } from "./BookDetails";

const meta: Meta<typeof BookDetails> = { component: BookDetails };
export default meta;

type Story = StoryObj<typeof BookDetails>;

export const Default: Story = { render: BookDetails };
