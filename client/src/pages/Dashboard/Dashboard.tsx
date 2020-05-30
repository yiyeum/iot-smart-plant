import React from 'react'
import { useIntl } from 'react-intl'
import { TitleAndContent } from '../../layouts'
import { Dashboard as DashboardContainer } from '../../containers'

export const Dashboard = () => {
    const { formatMessage } = useIntl()
    return (
        <TitleAndContent
            title={formatMessage({ id: 'dashboard.title' })}
            content={<DashboardContainer />} />
    )
}

