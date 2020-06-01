import { IPlantInfo } from './IPlantInfo'

export interface IPlant {
    id: number
    name: string
    note: string
    type: string
    info: IPlantInfo
}