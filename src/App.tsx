import "./App.css"
import { useEffect, useMemo } from "react"
import Timer from "./components/Timer"
import AnswerList from "./components/AnswerList"
import { ObjectType } from "./shared/helpers/types"
import questionData from "./components/questions/QuestionList"
import amountList from "./components/amounts/AmountList"
import Start from "./components/Start"
import { useSelector, useDispatch } from 'react-redux'
import { setEarned } from "./store/slice/GameSlice"
import { RootState } from "./store/store"
import HelpAnswer from "./components/help/HelpAnswer"

function App() {
  const dispatch = useDispatch()
  const { timeOut, questionNumber, earned } = useSelector((state: RootState) => state.game)
  const moneyPyramid = useMemo(() => amountList, []) as ObjectType
  const { people } = useSelector((state: RootState) => state.people)

  useEffect(() => {
    if (questionNumber > 1) {
      const amount = moneyPyramid.find((money: ObjectType) => money.id === questionNumber - 1)?.amount || "$ 0"
      dispatch(setEarned(amount))
    }
  }, [questionNumber, moneyPyramid, dispatch])

  return (
    <div className="app">
      {!people.id ? (
        <Start />
      ) : (
        <>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((money: ObjectType) => (
                <li
                  key={money.id}
                  className={
                    questionNumber === money.id
                      ? "moneyListItem active"
                      : `moneyListItem ${money.approved ? 'approved' : ''}`
                  }
                >
                  <span className="moneyListItemNumber">{money.id}</span>
                  {questionNumber === money.id && <span className='active_rotate'></span>}
                  <span className="moneyListItemAmount">{money.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="main">
            <div className="info_text">
              <p>
                Welcome to Who Wants to Be a Millionaire, {people.name}! Get ready to test your knowledge and aim for the top prize!
              </p>
            </div>
            
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <HelpAnswer />
                  <div className="timer">
                    <Timer />
                  </div>
                </div>
                
                  <div className="bottom">
                    <AnswerList
                      data={questionData}
                    />
                  </div>
                </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default App