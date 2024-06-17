import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Card } from "./Card";

const meta = { component: Card } satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: Card,
  args: {
    id: "123",
    thumbnailUrl: "https://m.media-amazon.com/images/I/715viYQgzRL._SY466_.jpg",
    title: "Codigo Limpo",
    authors: ["Luke Skywalker"],
    categories: ["Codigo Limpo"],
    shortDescription: `Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Cras at magna est. Ut viverra metus nibh. Integer sit
      amet purus gravida justo interdum mattis quis quis justo. Vivamus nec
      tristique metus, vitae ultricies est. Aliquam dapibus id augue nec
      sodales.`,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
