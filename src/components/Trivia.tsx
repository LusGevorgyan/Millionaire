import React, { useEffect, useState } from "react"
import useSound from "use-sound"
import play from "../sounds/play.mp3"
import correct from "../sounds/correct.mp3"
import wrong from "../sounds/wrong.mp3"
import { QuestionsType, QuestionType } from "./questions/question.type"

interface TriviaProps {
  data: QuestionsType
  questionNumber: number
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>
  setTimeOut: React.Dispatch<React.SetStateAction<boolean>>
}

const Trivia: React.FC<TriviaProps> = ({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) => {
  const [question, setQuestion] = useState<QuestionType | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<QuestionType["answers"][0] | null>(null)
  const [className, setClassName] = useState("answer")
  const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  useEffect(() => {
    letsPlay()
  }, [letsPlay])

  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  }, [data, questionNumber])

  const delay = (duration: number, callback: () => void) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  const handleClick = (a: QuestionType["answers"][0]) => {
    setSelectedAnswer(a)
    setClassName("answer active")
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong")
    })

    delay(5000, () => {
      if (a.correct) {
        correctAnswer()
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1)
          setSelectedAnswer(null)
        })
      } else {
        wrongAnswer()
        delay(1000, () => {
          setTimeOut(true)
        })
      }
    })
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a, index) => (
          <div
            key={index}
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trivia