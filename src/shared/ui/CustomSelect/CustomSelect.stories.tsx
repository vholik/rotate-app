import { CustomSelect } from './CustomSelect'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/CustomSelect',
    component: CustomSelect,
    tags: ['autodocs'],
} satisfies Meta<typeof CustomSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        options: [{ value: '123', content: '123' }],
    },
}
