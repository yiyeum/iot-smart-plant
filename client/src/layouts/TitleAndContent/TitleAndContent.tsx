import React from 'react'
import { Box, withStyles, WithStyles } from '@material-ui/core'
import { Title } from '../../components'

interface ITitleAndContent extends WithStyles<typeof styles> {
    title: JSX.Element | string
    content: JSX.Element
}

const styles = {
    root: {
        minHeight: '100vh',
        backgroundColor: '#f9f6f0'
    }
}

const TitleAndContentBase = (props: ITitleAndContent) => {
    const { title, content, classes } = props
    return (
        <div className={classes.root}>
            <Box p={7}>
                <Title>{title}</Title>
                {content}
            </Box>
        </div>
    )
}

export const TitleAndContent = withStyles(styles)(TitleAndContentBase)
