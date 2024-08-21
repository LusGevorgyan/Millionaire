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

function App() {
  const dispatch = useDispatch()
  const { username, timeOut, questionNumber, earned } = useSelector((state: RootState) => state.game)
  const moneyPyramid = useMemo(() => amountList, []) as ObjectType

  useEffect(() => {
    if (questionNumber > 1) {
      const amount = moneyPyramid.find((m: ObjectType) => m.id === questionNumber - 1)?.amount || "$ 0"
      dispatch(setEarned(amount))
    }
  }, [questionNumber, moneyPyramid, dispatch])

  return (
    <div className="app">
      {!username ? (
        <Start />
      ) : (
        <>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m: ObjectType) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  {questionNumber === m.id && <span className='active_rotate'></span>}
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="main">
            <div className="info_text">
              <p>Բարի գալուստ «Ո՞վ է ուզում դառնալ միլիոնատեր» ինտելեկտուալ խաղ, Հարգելի {username}</p>
            </div>
            
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
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