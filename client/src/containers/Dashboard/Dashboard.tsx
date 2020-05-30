import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { PLANT_DETAIL_URL } from '../../constants';

export const Dashboard = () => {
    const { formatMessage } = useIntl()
    return (
        <Box p={6}>
            <Typography variant='h4'>{formatMessage({ id: 'dashboard.title' })}</Typography>
            <ul>
                <li>
                    <Link to={`${PLANT_DETAIL_URL}/${2}`}></Link>
                </li>
            </ul>
        </Box>
    );
}