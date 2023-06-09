import { ProfilePageHeader } from './EditableProfileHeader'

import type { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'features/EditableProfileHeader',
    component: ProfilePageHeader,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfilePageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}
