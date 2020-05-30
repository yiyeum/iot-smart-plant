import React from 'react'
import { Grid, Box, WithStyles, withStyles } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { PlantCard, Title } from '../../components'

const styles = {
    root: {
        backgroundImage: "url('../../constant/img/background.jpg')"
    }
}

const DashboardBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props
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