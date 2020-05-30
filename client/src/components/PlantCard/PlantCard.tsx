import React from 'react'
import { makeStyles, createStyles, Typography, WithStyles, withStyles, Card, CardActionArea, CardMedia, CardActions, CardContent, Button, Theme } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import LocalDrinkRoundedIcon from '@material-ui/icons/LocalDrinkRounded'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { PLANT_DETAIL_URL } from '../../constants'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        center: {
            textAlign: 'center' as 'center',
        },
        action: {
            margin: '0 auto'
        },
        icon: {
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            width: '4em',
            height: '4em',
            textAlign: 'center' as 'center',
            padding: '.9em',
            display: 'inline-block',
            marginRight: '2%'
        }
    }),
);

export const PlantCard = () => {
    const classes = useStyles()
    const { formatMessage } = useIntl()
    return (
        <Card>
            <CardActionArea>
                <Link to={`${PLANT_DETAIL_URL}/${2}`}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color='textPrimary'>
                            Name
                        </Typography>
                    </CardContent>
                    <CardMedia
                        image=""
                        title="Contemplative Reptile"
                    />
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
                </Link>
            </CardActionArea>
            <CardActions>
                <Button size="small" className={classes.action}>
                    {formatMessage({ id: 'plant.card.water' })}
                </Button>
            </CardActions>
        </Card>
    );
}

