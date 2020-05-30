import React, { useState } from 'react'
import { Box, Typography, withStyles, WithStyles } from '@material-ui/core'

const styles = {
    root: {
        border: '3px dashed tomato'
    }
}

const PlantDetailBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <Box p={5}>
            <Box mb={5}>
                <Typography variant='h4' color='textPrimary'>Name</Typography>
            </Box>
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
        </Box>
    )
}

export const PlantDetail = withStyles(styles)(PlantDetailBase)