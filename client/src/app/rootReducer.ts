import { combineReducers } from '@reduxjs/toolkit'
import plantsState from '../slices/plants'

const rootReducer = combineReducers({
    plantsState
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
