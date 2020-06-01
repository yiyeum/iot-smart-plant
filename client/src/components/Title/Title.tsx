import React from 'react'
import { Box, Typography, withStyles, WithStyles } from '@material-ui/core'

interface ITitle extends WithStyles<typeof styles> {
    children: JSX.Element[] | JSX.Element | string
}

const styles = {
    root: {
        borderBottom: '2px solid #a0bfb2',
        paddingBottom: 5
    }
}

const TitleBase = (props: ITitle) => {
    const { classes } = props

    return (
        <Box mb={5}>
            <Typography variant='h4' color="textPrimary" className={classes.root}>{props.children}</Typography>
        </Box>
    )
}

export const Title = withStyles(styles)(TitleBase)