import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPlant } from '../models'
import { RootState } from '../app/rootReducer'
import { plants } from '../fixtures'

interface IPlantState {
    isLoading: boolean
    plants: IPlant[]
    error: string
}

export const initialState: IPlantState = {
    isLoading: true,
    plants: plants,
    error: '',
}

export const plantsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        getPlants() {
            return initialState
        },
        getPlantsSuccess(state, action: PayloadAction<IPlant[]>) {
            state.isLoading = false
            state.plants = action.payload
            state.error = ''
        },
        getPlantsFailed(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
            state.plants = []
        },
    },
})

// const {
//     // getPlants,
//     // getPlantsSuccess,
//     // getPlantsFailed,
// } = plantsSlice.actions

export default plantsSlice.reducer


export const plantsSelector = (state: RootState) =>
    state.plantsState.plants

export const isLoadingSelector = (state: RootState) =>
    state.plantsState.isLoading
