import React from 'react'
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
            backgroundColor: theme.palette.background.paper
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
        }
    }),
);

interface IPlantCard {
    plant: IPlant
}

export const PlantCard = (props: IPlantCard) => {
    const { plant } = props
    const classes = useStyles()
    const { formatMessage } = useIntl()

    return <Card key={plant.id} className={classes.root} >
        <CardActionArea>
            <Link to={`${PLANT_DETAIL_URL}/${plant.id}`}>
                <CardMedia
                    image={plant.img}
                    title={plant.name}
                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color='textPrimary'>
                            {plant.name}
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.center}>
                        <div className={classes.icon}>
                            <LocalDrinkRoundedIcon />
                            <Typography variant='body2'>65%</Typography>
                        </div>
                        <div className={classes.icon}>
                            <Brightness4Icon />
                            <Typography variant='body2'>70%</Typography>
                        </div>
                    </CardContent>
                </CardMedia>
            </Link>
        </CardActionArea>
        <CardActions className={classes.action}>
            <Button size="small" className={classes.btn}>
                {formatMessage({ id: 'plant.card.water' })}
            </Button>
        </CardActions>
    </Card >
}

