export interface AnswerType {
    option: string
    text: string
    correct: boolean
    probability: number
}

export type AnswersType = AnswerType[]

export interface QuestionType {
    id: number
    question: string
    answers: AnswersType
}

export type QuestionsType = QuestionType[]