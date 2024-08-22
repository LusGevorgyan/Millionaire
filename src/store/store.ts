import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './slice/GameSlice'
import peopleReducer from './slice/PeopelSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    people: peopleReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch