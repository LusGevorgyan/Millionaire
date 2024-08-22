import { QuestionsType } from "../components/questions/question.type"

const shuffleAndSelectQuestions = (questions: QuestionsType, num: number): QuestionsType => {
    const easyQuestions = questions.filter(q => q.difficulty === 'easy')
    const mediumQuestions = questions.filter(q => q.difficulty === 'medium')
    const hardQuestions = questions.filter(q => q.difficulty === 'hard')
  
    const selectedEasy = easyQuestions.sort(() => 0.5 - Math.random()).slice(0, Math.floor(num * 0.4)) // 40% easy
    const selectedMedium = mediumQuestions.sort(() => 0.5 - Math.random()).slice(0, Math.floor(num * 0.4)) // 40% medium
    const selectedHard = hardQuestions.sort(() => 0.5 - Math.random()).slice(0, Math.ceil(num * 0.2)) // 20% hard
  
    const selectedQuestions = [...selectedEasy, ...selectedMedium, ...selectedHard].sort(() => 0.5 - Math.random())
    return selectedQuestions
}

export default shuffleAndSelectQuestions