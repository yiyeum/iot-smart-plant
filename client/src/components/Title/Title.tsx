import React from 'react'
import { Box, Typography } from '@material-ui/core'

interface ITitle {
    children: JSX.Element[] | JSX.Element | string
}

export const Title = (props: ITitle) => {
    return (
        <Box mb={5}>
            <Typography variant='h4' color="textPrimary">{props.children}</Typography>
        </Box>
    )
}