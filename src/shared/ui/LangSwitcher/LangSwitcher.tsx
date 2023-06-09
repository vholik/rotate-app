import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import cls from './LangSwitcher.module.scss'
import { Button, ThemeButton } from '../Button/Button'

import GlobeIcon from '@/shared/assets/icons/globe.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

interface LangSwitcherProps {
    className?: string
    collapsed?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
    ({ className, collapsed }) => {
        const { t, i18n } = useTranslation()

        const toggle = () => {
            i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')
        }

        return (
            <Button
                type="button"
                onClick={toggle}
                theme={ThemeButton.CLEAR}
                className={classNames(
                    cls.LangSwitcher,
                    { [cls.collapsed]: collapsed },
                    [className],
                )}>
                <GlobeIcon />
                {t(collapsed ? 'Language' : 'Language short')}
            </Button>
        )
    },
)
