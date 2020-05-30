import React from 'react'
import { Grid, WithStyles, withStyles } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { PlantCard } from '../../components'

const styles = {}

const DashboardBase = (props: WithStyles<typeof styles>) => {
    const { formatMessage } = useIntl()
    return (
        <Grid container>
            <Grid item md={4}>
                <PlantCard />
            </Grid>
        </Grid>
    );
}

export const Dashboard = withStyles(styles)(DashboardBase)