import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta = { component: Tag } satisfies Meta<typeof Tag>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: Tag, args: { title: "My Tag" } };
