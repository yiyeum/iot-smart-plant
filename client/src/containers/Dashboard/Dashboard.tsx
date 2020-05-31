import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { PlantCard } from '../../components'
import { plantsSelector } from '../../slices/plants'
import { IPlant } from '../../models'

export const Dashboard = () => {
    const plants: IPlant[] = useSelector(plantsSelector)

    return (
        <Grid container>
            <Grid item md={4}>
                {
                    plants.length > 0 ?
                        plants.map((plant: IPlant) => {
                            return <PlantCard key={plant.id} plant={plant} />
                        }) :
                        <Typography>No Plant</Typography>
                }
            </Grid>
        </Grid>
    );
}
