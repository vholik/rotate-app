import { memo, type FC, useCallback } from 'react'

import cls from './ThemeSwitcher.module.scss'

import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings } from '@/entities/User/model/services/saveJsonSettings'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()
    const dispatch = useAppDispatch()

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }))
        })
    }, [toggleTheme])

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onToggleHandler}
            className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <div
                className={classNames(cls.iconWrapper, {
                    [cls.active]: theme === Theme.DARK,
                })}>
                <DarkIcon />
            </div>
            <div
                className={classNames(cls.iconWrapper, {
                    [cls.active]: theme === Theme.LIGHT,
                })}>
                <LightIcon />
            </div>
        </Button>
    )
})
