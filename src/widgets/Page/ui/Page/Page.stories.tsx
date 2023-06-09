import { Page } from './Page'

import type { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widgets/Page',
    component: Page,
    tags: ['autodocs'],
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}
