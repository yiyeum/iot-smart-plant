import React from 'react'
import { Box, Typography, makeStyles, Theme, createStyles } from '@material-ui/core'

interface ITitle {
    children: JSX.Element[] | JSX.Element | string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.common.white
        }
    })
)

export const Title = (props: ITitle) => {
    const classes = useStyles()
    return (
        <Box mb={5}>
            <Typography variant='h4' className={classes.root}>{props.children}</Typography>
        </Box>
    )
}