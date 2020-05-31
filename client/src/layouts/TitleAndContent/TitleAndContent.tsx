import React from 'react'
import { Box, withStyles, WithStyles } from '@material-ui/core'
import { Title } from '../../components'

interface ITitleAndContent extends WithStyles<typeof styles> {
    title: JSX.Element | string
    content: JSX.Element
}

const styles = {
    root: {
        backgroundImage: `url('https://images.cdn2.stockunlimited.net/clipart/plant-pattern-background_1943348.jpg')`,
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
    }
}

const TitleAndContentBase = (props: ITitleAndContent) => {
    const { title, content, classes } = props
    return (
        <div className={classes.root}>
            <Box p={5}>
                <Title>{title}</Title>
                {content}
            </Box>
        </div>
    )
}

export const TitleAndContent = withStyles(styles)(TitleAndContentBase)
