import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { BookDetails } from "./BookDetails";

const meta = { component: BookDetails } satisfies Meta<typeof BookDetails>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      location: {
        pathParams: { id: "123" },
      },
      routing: { path: "/:id" },
    },
  },
};
