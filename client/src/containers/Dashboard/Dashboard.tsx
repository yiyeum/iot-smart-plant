import React from 'react'
import { Grid, Typography, Box, WithStyles, withStyles, Card, CardActionArea, CardMedia, CardActions, CardContent, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import LocalDrinkRoundedIcon from '@material-ui/icons/LocalDrinkRounded'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { PLANT_DETAIL_URL } from '../../constants'

//                    <Link to={`${PLANT_DETAIL_URL}/${2}`}></Link>

const styles = {
    center: {
        textAlign: 'center' as 'center',
    },
    action: {
        margin: '0 auto'
    },
    icon: {
        borderRadius: '50%',
        backgroundColor: '#309ff5',
        color: 'white',
        width: '4em',
        height: '4em',
        textAlign: 'center' as 'center',
        padding: '.9em',
        display: 'inline-block',
        marginRight: '2%'
    },
    light: {
        backgroundColor: '#ff5a5a'
    }
}

const DashboardBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props
    const { formatMessage } = useIntl()
    return (
        <Box p={6}>
            <Typography variant='h4' color='textPrimary'>{formatMessage({ id: 'dashboard.title' })}</Typography>
            <Grid container>
                <Grid item md={4}>
                    <Card>
                        <CardActionArea>
                            <Link to='plant/3'>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" color='primary'>
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
                                    <div className={`${classes.icon} ${classes.light}`}>
                                        <Brightness4Icon />
                                        <Typography variant='body2'>70%</Typography>
                                    </div>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" className={classes.action}>
                                {formatMessage({ id: 'plant.card.water' })}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export const Dashboard = withStyles(styles)(DashboardBase)