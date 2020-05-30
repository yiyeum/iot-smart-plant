import React from 'react'
import { useIntl } from 'react-intl'
import { TitleAndContent } from '../../layouts'
import { PlantDetail as PlantDetailContainer } from '../../containers'

export const PlantDetail = () => {
    const { formatMessage } = useIntl()
    return (
        <TitleAndContent
            title={formatMessage({ id: 'plant.detail.title' })}
            content={<PlantDetailContainer />} />
    )
}

