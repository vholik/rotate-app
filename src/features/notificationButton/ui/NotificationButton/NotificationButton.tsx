import { type FC, memo, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Popover } from 'shared/ui/Popups'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon, IconColor } from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { NotificationList } from 'entities/Notification'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'
import { AnimationProvider } from 'shared/lib/components/AnimationProvider'

import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button theme={ThemeButton.CLEAR} onClick={onOpenDrawer}>
            <Icon Icon={NotificationIcon} color={IconColor.SECONDARY} />
        </Button>
    )

    return (
        <>
            <BrowserView>
                <Popover
                    direction="bottom left"
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </>
    )
})
