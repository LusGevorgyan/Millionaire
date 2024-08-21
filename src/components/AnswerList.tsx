import React, { useEffect, useState } from "react"
import useSound from "use-sound"
import play from "../sounds/play.mp3"
import correct from "../sounds/correct.mp3"
import wrong from "../sounds/wrong.mp3"
import { QuestionsType, QuestionType } from "./questions/question.type"
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedAnswer, setTimeOut, setQuestionNumber } from "../store/slice/GameSlice"
import { RootState } from "../store/store"

interface AnswerListProps {
  data: QuestionsType
}

const AnswerList: React.FC<AnswerListProps> = ({
  data,
}) => {
  const dispatch = useDispatch()
  const { selectedAnswer, questionNumber } = useSelector((state: RootState) => state.game)
  const [question, setQuestion] = useState<QuestionType | null>(null)
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
    dispatch(setSelectedAnswer(a.text))
    setClassName("answer active")
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong")
    })

    delay(5000, () => {
      if (a.correct) {
        correctAnswer()
        delay(1000, () => {
          dispatch(setQuestionNumber(questionNumber + 1))
          dispatch(setSelectedAnswer(null))
        })
      } else {
        wrongAnswer()
        delay(1000, () => {
          dispatch(setTimeOut(true))
        })
      }
    })
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer, index) => (
          <div
            key={index}
            className={selectedAnswer === answer.text ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(answer)}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="rotate" style={{ marginRight: '20px' }}></div>{answer.option}.
              <span style={{ marginLeft: '10px' }}>
                {answer.text}
              </span>
            </div>
            <div className="rotate" style={{ marginRight: '20px' }}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnswerList