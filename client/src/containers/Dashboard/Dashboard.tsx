import React from 'react'
import { Grid, Typography, Box, WithStyles, withStyles } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { PlantCard } from '../../components'
const styles = {}

const DashboardBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props
    const { formatMessage } = useIntl()
    return (
        <Box p={5}>
            <Box mb={5}>
                <Typography variant='h4' color='textPrimary'>{formatMessage({ id: 'dashboard.title' })}</Typography>
            </Box>
            <Grid container>
                <Grid item md={4}>
                    <PlantCard />
                </Grid>
            </Grid>
        </Box>
    );
}

export const Dashboard = withStyles(styles)(DashboardBase)