import React from 'react'
import { Box } from '@material-ui/core'
import { Title } from '../../components'

interface ITitleAndContent {
    title: JSX.Element | string
    content: JSX.Element
}

export const TitleAndContent = (props: ITitleAndContent) => {
    const { title, content } = props
    return (
        <Box p={5}>
            <Title>{title}</Title>
            {content}
        </Box>
    )
}

