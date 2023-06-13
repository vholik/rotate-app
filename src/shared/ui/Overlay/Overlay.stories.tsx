import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Overlay } from './Overlay'

const meta = {
    title: 'shared/Overlay',
    component: Overlay,
    tags: ['autodocs'],
} satisfies Meta<typeof Overlay>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}