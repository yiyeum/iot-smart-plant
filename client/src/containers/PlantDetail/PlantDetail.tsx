import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { Title } from '../../components'

export const PlantDetail = () => {
    return (
        <Box p={5}>
            <Title>Name</Title>
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
