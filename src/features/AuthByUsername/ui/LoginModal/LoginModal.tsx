import { Suspense, type FC } from 'react'

import { LoginFormAsync } from '../LoginForm/LoginForm.async'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/Loader'
import { Modal } from '@/shared/ui/Modal'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({
    className,
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            lazy
            onClose={onClose}
            isOpen={isOpen}
            className={classNames('', {}, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    )
}
