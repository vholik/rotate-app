import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextColor, TextSize, TextWeight } from 'shared/ui/Text/Text'

import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

import cls from './CommentList.module.scss'

interface CommentListProps {
    className?: string
    comments: Comment[]
    isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, isLoading, comments } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        key={comment.id}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text
                    text={t('No comments yet')}
                    className={cls.sectionEmpty}
                    size={TextSize.SMALL}
                />
            )}
        </div>
    )
})