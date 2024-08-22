import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CharacterType } from '../../components/characters/character.type'

export interface PeopleState {
  people: CharacterType
  hasPeople: boolean
}

const initialState: PeopleState = {
  people: {} as CharacterType,
  hasPeople: false,
}

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<CharacterType>) => {
      state.people = action.payload
    },
  }
})

export const { setPeople } = peopleSlice.actions
export default peopleSlice.reducer