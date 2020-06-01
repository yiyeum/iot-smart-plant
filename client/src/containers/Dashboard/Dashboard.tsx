import React from 'react'
import { useIntl } from 'react-intl'
import { Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { PlantCard } from '../../components'
import { plantsSelector } from '../../slices/plants'
import { IPlant } from '../../models'

export const Dashboard = () => {
    const plants: IPlant[] = useSelector(plantsSelector)
    const { formatMessage } = useIntl()

    return (
        <Grid container>
            {
                plants.length > 0 ?
                    plants.map((plant: IPlant) => {
                        return (
                            <Grid item md={4} sm={6} xs={12} key={plant.id}>
                                <PlantCard key={plant.id} plant={plant} />
                            </Grid>)
                    }) :
                    <Typography>{formatMessage({ id: 'plant.error.noplant' })}</Typography>
            }
        </Grid>
    );
}
