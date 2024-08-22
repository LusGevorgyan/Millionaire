import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AnswersType, QuestionsType } from "../../components/questions/question.type"

interface GameState {
  selectedAnswer: string | null
  questionNumber: number
  timeOut: boolean
  earned: string
  excludedAnswers: AnswersType
  questions: QuestionsType
  isActiveExcluded: boolean
}

const initialState: GameState = {
  selectedAnswer: null,
  questionNumber: 1,
  timeOut: false,
  earned: "$ 0",
  excludedAnswers: [],
  questions: [],
  isActiveExcluded: false
}

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSelectedAnswer: (state, action: PayloadAction<string | null>) => {
      state.selectedAnswer = action.payload
    },
    setQuestionNumber: (state, action: PayloadAction<number>) => {
      state.questionNumber = action.payload
    },
    setTimeOut: (state, action: PayloadAction<boolean>) => {
      state.timeOut = action.payload
    },
    setExcludedAnswers: (state) => {
      const currentQuestionIndex = state.questionNumber - 1
      if (currentQuestionIndex < 0 || currentQuestionIndex >= state.questions.length) return
      
      const currentQuestion = state.questions[currentQuestionIndex];
      
      if (!currentQuestion) return
    
      const correctAnswer = currentQuestion.answers.find((answer) => answer.correct)
      const incorrectAnswers = currentQuestion.answers.filter((answer) => !answer.correct)
      
      if (correctAnswer && incorrectAnswers.length > 0) {
        const randomIncorrectAnswer = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)]
        state.excludedAnswers = [
          {text: correctAnswer.text, correct: correctAnswer.correct}, 
          {text: randomIncorrectAnswer.text, correct: randomIncorrectAnswer.correct}
        ] as AnswersType
        state.isActiveExcluded = true
      }
    },
    resetExcludedAnswers: (state) => {
      state.excludedAnswers = [];
    },
    setEarned: (state, action: PayloadAction<string>) => {
      state.earned = action.payload
    },
    setQuestions: (state, action: PayloadAction<QuestionsType>) => {
      state.questions = action.payload
    }
  }
})

export const {
  setSelectedAnswer,
  setQuestionNumber,
  setTimeOut,
  setExcludedAnswers,
  setQuestions,
  setEarned,
  resetExcludedAnswers
} = gameSlice.actions

export default gameSlice.reducer