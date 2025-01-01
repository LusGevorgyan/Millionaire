import { QuestionsType } from "../components/questions/question.type"

const shuffleAndSelectQuestions = (questions: QuestionsType, total: number): {
  initialQuestions: QuestionsType,
  availableQuestions: { easy: QuestionsType, medium: QuestionsType, hard: QuestionsType }
} => {
  const easyQuestions = questions
    .filter(question => question.difficulty === 'easy')
    .sort(() => 0.5 - Math.random())

  const mediumQuestions = questions
    .filter(question => question.difficulty === 'medium')
    .sort(() => 0.5 - Math.random())

  const hardQuestions = questions
    .filter(question => question.difficulty === 'hard')
    .sort(() => 0.5 - Math.random())

  const initialQuestions = [
    ...easyQuestions.slice(0, 5),
    ...mediumQuestions.slice(0, 5),
    ...hardQuestions.slice(0, 6)
  ]

  const availableQuestions = {
    easy: easyQuestions.slice(5),     // Remaining easy questions
    medium: mediumQuestions.slice(5), // Remaining medium questions
    hard: hardQuestions.slice(6)      // Remaining hard questions
  }

  return { initialQuestions, availableQuestions }
}

export default shuffleAndSelectQuestions