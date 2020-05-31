import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Box, Typography, createStyles, makeStyles, Theme } from '@material-ui/core'
import { PLANT_DETAIL_URL } from '../../constants'
import { plantsSelector } from '../../slices/plants'
import { IPlant } from '../../models'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            padding: 5
        }
    })
);

const PlantDetailBase = (props: any) => {
    const classes = useStyles()
    const plants: IPlant[] = useSelector(plantsSelector)
    const plantId: string = props.location.pathname.split(`${PLANT_DETAIL_URL}/`)[1]
    const plant: IPlant = plants.filter((plant: IPlant) => plant.id === parseInt(plantId))[0]
    console.log(plants, plantId, ' : PLANT')
    return (
        <div className={classes.root}>
            <Box m={3}>
                <Typography variant='h6' color='primary'>Plant Details</Typography>
                <ul>
                    {
                        plant.info.map((i: string, index: number) => {
                            return <li key={index}>{i}</li>
                        })
                    }
                </ul>
            </Box>
            <Box m={3}>
                <Typography variant='h6' color='primary'>Note</Typography>
                <Typography variant='body2'>note note note</Typography>
            </Box>
        </div>
    )
}

export const PlantDetail = withRouter(PlantDetailBase)