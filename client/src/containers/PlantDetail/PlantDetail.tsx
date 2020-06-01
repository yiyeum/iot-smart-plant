import React from 'react'
import { useIntl } from 'react-intl'
import { useSelector } from 'react-redux'
import { withRouter, RouteProps } from 'react-router-dom'
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

const getUrlId = ({ location }: RouteProps, from: string) => parseInt(location?.pathname.split(`${from}/`)[1] ?? '0')

const PlantDetailBase = (props: RouteProps) => {
    const { root } = useStyles()
    const { formatMessage } = useIntl()
    const plants: IPlant[] = useSelector(plantsSelector)
    const plantId: number = getUrlId(props, PLANT_DETAIL_URL)
    const plant: IPlant = plants.filter((plant: IPlant) => plant.id === plantId)[0]

    return (
        <div className={root}>
            <Box m={3}>
                <Typography variant='h6' color='primary'>{formatMessage({ id: 'plant.detail.title' })}</Typography>
                <ul>
                    {
                        plant.info.horticulture.map((i: string, index: number) => {
                            return <li key={index}>{formatMessage({ id: i })}</li>
                        })
                    }
                </ul>
            </Box>
            <Box m={3}>
                <Typography variant='h6' color='primary'>{formatMessage({ id: 'plant.detail.note' })}</Typography>
                <Typography variant='body2'>note note note</Typography>
            </Box>
        </div>
    )
}

export const PlantDetail = withRouter(PlantDetailBase)