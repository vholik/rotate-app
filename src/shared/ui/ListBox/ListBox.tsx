import { type FC, memo, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import CheckIcon from 'shared/assets/icons/check.svg'
import { type DropdownDirection } from 'shared/types/ui'

import { Icon, IconColor } from '../Icon/Icon'

import cls from './ListBox.module.scss'

type ListBoxTheme = 'primary_theme' | 'secondary_theme'

export interface ListBoxItem {
    value: string
    content: string
}

interface ListBoxProps {
    className?: string
    theme?: ListBoxTheme
    items?: ListBoxItem[]
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    readonly?: boolean
    direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': cls.directionBottomLeft,
    'bottom left': cls.directionTopLeft,
    'bottom right': cls.directionBottomRight,
    'top right': cls.directionTopRight,
}

export const ListBox: FC<ListBoxProps> = (props) => {
    const {
        className,
        theme = 'primary_theme',
        onChange,
        defaultValue,
        items,
        value,
        readonly,
        direction = 'bottom right',
    } = props

    const { t } = useTranslation()
    const optionsMods = [cls.options, mapDirectionClass[direction]]
    return (
        <Listbox
            as="div"
            value={value}
            onChange={onChange}
            className={cls.ListBox}
        >
            {({ open }) => (
                <>
                    <Listbox.Button
                        className={classNames(cls.trigger, {
                            [cls.open]: open,
                            [cls[theme]]: true,
                            [cls.readonly]: readonly,
                        })}
                    >
                        {value || defaultValue}
                    </Listbox.Button>
                    <Listbox.Options
                        className={classNames('', {}, optionsMods)}
                    >
                        {items
                            ? items.map((item) => (
                                <Listbox.Option
                                    key={item.value}
                                    value={item.value}
                                    as={Fragment}
                                >
                                    {({ active, selected }) => (
                                        <li
                                            className={classNames(cls.item, {
                                                [cls.active]: active,
                                            })}
                                        >
                                            {item.content}{' '}
                                            {selected && (
                                                <Icon
                                                    Icon={CheckIcon}
                                                    color={IconColor.PRIMARY}
                                                />
                                            )}
                                        </li>
                                    )}
                                </Listbox.Option>
                            ))
                            : null}
                    </Listbox.Options>
                </>
            )}
        </Listbox>
    )
}
