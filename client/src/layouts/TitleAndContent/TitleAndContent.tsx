import React from 'react'
import { Box, withStyles, WithStyles } from '@material-ui/core'
import { Title } from '../../components'
import * as backgroundImage from '../../constants/img/background.jpg'

interface ITitleAndContent extends WithStyles<typeof styles> {
    title: JSX.Element | string
    content: JSX.Element
}

const styles = {
    root: {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
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
