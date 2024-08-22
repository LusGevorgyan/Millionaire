import React, { useEffect, useState } from "react"
import useSound from "use-sound"
import play from "../sounds/play.mp3"
import correct from "../sounds/correct.mp3"
import wrong from "../sounds/wrong.mp3"
import { QuestionsType, QuestionType } from "./questions/question.type"
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedAnswer, setQuestions, setTimeOut, setQuestionNumber, resetExcludedAnswers } from "../store/slice/GameSlice"
import { RootState } from "../store/store"
import shuffleAndSelectQuestions from "../shared/shuffleAndSelectQuestions"

interface AnswerListProps {
  data: QuestionsType
}

const AnswerList = ({ data }: AnswerListProps) => {
  const dispatch = useDispatch()
  const { selectedAnswer, questionNumber, excludedAnswers } = useSelector((state: RootState) => state.game)
  const { people } = useSelector((state: RootState) => state.people)

  const [selectedQuestions, setSelectedQuestions] = useState<QuestionsType>([])
  const [question, setQuestion] = useState<QuestionType | null>(null)
  const [className, setClassName] = useState("answer")
  const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  useEffect(() => {
    if (data.length > 0) {
      const selected = shuffleAndSelectQuestions(data, 15)
      setSelectedQuestions(selected)
      dispatch(setQuestions(selected))
      
      if (selected.length > 0) {
        setQuestion(selected[questionNumber - 1])
      }
    }
  }, [data, dispatch, questionNumber, letsPlay])

  useEffect(() => {
    setQuestion(selectedQuestions[questionNumber - 1])
  }, [selectedQuestions, questionNumber])

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
  
    if (!a.correct) {
      delay(5000, () => {
        const correctAnswer = question?.answers.find(ans => ans.correct)
        if (correctAnswer) {
          setClassName(`answer correct`)
        }
        wrongAnswer()
        delay(1000, () => {
          dispatch(setTimeOut(true))
        })
      })
    } else {
      delay(5000, () => {
        correctAnswer()
        delay(1000, () => {
          dispatch(setQuestionNumber(questionNumber + 1))
          dispatch(setSelectedAnswer(null))
          dispatch(resetExcludedAnswers())
        })
      })
    }
  }
  
  return (
    <div className="trivia">
      <img src={people.player} className="player" alt="Player"/>
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer, index) => {
          const excludedAnswerTexts = excludedAnswers.map((excludedAnswer) => excludedAnswer.text)

          return (
            <div
              key={index}
              className={selectedAnswer === answer.text ? className : "answer"}
              onClick={() => !selectedAnswer && handleClick(answer)}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="rotate" style={{ marginRight: '20px' }}></div>{answer.option}.
                <span style={{ marginLeft: "10px" }}>
                  {excludedAnswerTexts.length ? excludedAnswerTexts.includes(answer.text) ? answer.text : null : answer.text}
                </span>
              </div>
              <div className="rotate" style={{ marginRight: '20px' }}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnswerList