import React from 'react'
import { Box, Typography, createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px'
        }
    })
);

export const PlantDetail = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Box m={3}>
                <Typography variant='h6' color='primary'>Plant Details</Typography>
                <ul>
                    <li>Detail 1</li>
                    <li>Detail 2</li>
                </ul>
            </Box>
            <Box m={3}>
                <Typography variant='h6' color='primary'>Note</Typography>
                <Typography variant='body2'>note note note</Typography>
            </Box>
        </div>
    )
}
