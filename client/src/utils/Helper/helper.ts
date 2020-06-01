import { RouteProps } from 'react-router-dom'

/**
 * Get id from url
 * @param location route location
 */
export const getUrlId = ({ location }: RouteProps, from: string) => parseInt(location?.pathname.split(`${from}/`)[1] ?? '0')
