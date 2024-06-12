import { Meta, StoryObj } from "@storybook/react";
import { HeaderTitle } from "./HeaderTitle";

const meta = { component: HeaderTitle } satisfies Meta<typeof HeaderTitle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: HeaderTitle };
