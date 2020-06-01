import React, { ReactElement, FC } from 'react'
import { makeStyles, createStyles, Typography, Card, CardActionArea, CardMedia, CardActions, CardContent, Button, Theme } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import LocalDrinkRoundedIcon from '@material-ui/icons/LocalDrinkRounded'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { PLANT_DETAIL_URL } from '../../constants'
import { IPlant } from '../../models'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            margin: 10
        },
        center: {
            textAlign: 'center' as 'center',
        },
        action: {
            backgroundColor: theme.palette.primary.main
        },
        btn: {
            margin: '0 auto',
            color: theme.palette.common.white,
        },
        icon: {
            borderRadius: '50%',
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            width: '4em',
            height: '4em',
            textAlign: 'center' as 'center',
            padding: '.9em',
            display: 'inline-block',
            marginRight: '2%'
        },
        warn: {
            border: `2px solid ${theme.palette.error.light}`,
            color: theme.palette.error.light,
        },
    }),
);

interface IPlantCard {
    plant: IPlant
}

export const PlantCard: FC<IPlantCard> = ({ plant }): ReactElement => {
    const { id, name, type, info: { img, humidity, light } } = plant
    const { root, center, icon, action, btn, warn } = useStyles()
    const { formatMessage } = useIntl()

    return <Card key={id} className={root} >
        <CardActionArea>
            <Link to={`${PLANT_DETAIL_URL}/${id}`}>
                <CardMedia
                    image={img}
                    title={name}
                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color='textPrimary'>
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" color='textPrimary'>
                            {formatMessage({ id: type })}
                        </Typography>
                    </CardContent>
                    <CardContent className={center}>
                        <div className={`${icon} ${humidity < 50 ? warn : ''}`}>
                            <LocalDrinkRoundedIcon />
                            <Typography variant='body2'>{humidity}%</Typography>
                        </div>
                        <div className={icon}>
                            <Brightness4Icon />
                            <Typography variant='body2'>{light}%</Typography>
                        </div>
                    </CardContent>
                </CardMedia>
            </Link>
        </CardActionArea>
        <CardActions className={action}>
            <Button size="small" className={btn}>
                {formatMessage({ id: 'plant.card.water' })}
            </Button>
        </CardActions>
    </Card >
}