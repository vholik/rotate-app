import { memo, type FC } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'

import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    SERIF = 'serif',
}

export enum TextSize {
    SMALL = 'size_sm',
    M = 'size_m',
    L = 'size_l',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextWeight {
    REGULAR = 'weight_regular',
    MEDIUM = 'weight_medium',
    SEMIBOLD = 'weight_semibold',
    BOLD = 'weight_bold',
    DEFAULT = 'weight_default',
}

export enum TextColor {
    PRIMARY = 'primary_color',
    SECONDARY = 'secondary_color',
    UNSET = 'unset',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
    color?: TextColor
    weight?: TextWeight
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        color = TextColor.UNSET,
        weight = TextWeight.DEFAULT,
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
        [cls[weight]]: true,
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (
                <h2 className={classNames(cls.title, {}, [cls[color]])}>
                    {title}
                </h2>
            )}
            {text && (
                <p className={classNames(cls.text, {}, [cls[color]])}>{text}</p>
            )}
        </div>
    )
})