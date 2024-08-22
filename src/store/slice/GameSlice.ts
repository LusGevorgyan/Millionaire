import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GameState {
  timeOut: boolean
  questionNumber: number
  earned: string
  selectedAnswer: string | null
}

const initialState: GameState = {
  timeOut: false,
  questionNumber: 1,
  earned: "$ 0",
  selectedAnswer: null
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTimeOut: (state, action: PayloadAction<boolean>) => {
      state.timeOut = action.payload
    },
    setQuestionNumber: (state, action: PayloadAction<number>) => {
      state.questionNumber = action.payload
    },
    setEarned: (state, action: PayloadAction<string>) => {
      state.earned = action.payload
    },
    setSelectedAnswer: (state, action: PayloadAction<string | null>) => {
        state.selectedAnswer = action.payload
    }
  }
})

export const { setTimeOut, setQuestionNumber, setEarned, setSelectedAnswer } = gameSlice.actions
export default gameSlice.reducer