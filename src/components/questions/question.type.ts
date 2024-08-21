export interface AnswerType {
    text: string
    correct: boolean
}

export type AnswersType = AnswerType[]

export interface QuestionType {
    id: number
    question: string
    answers: AnswersType
}

export type QuestionsType = QuestionType[]