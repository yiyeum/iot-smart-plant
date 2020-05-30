import React from 'react'
import { Grid, Box, WithStyles } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { PlantCard, Title } from '../../components'

export const Dashboard = () => {
    const { formatMessage } = useIntl()
    return (
        <Box p={5}>
            <Title>{formatMessage({ id: 'dashboard.title' })}</Title>
            <Grid container>
                <Grid item md={4}>
                    <PlantCard />
                </Grid>
            </Grid>
        </Box>
    );
}
