import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTimeOut } from "../store/slice/GameSlice"
import { RootState } from "../store/store"

const Timer = () => {
  const dispatch = useDispatch()
  const [timer, setTimer] = useState(3000)
  const questionNumber = useSelector((state: RootState) => state.game.questionNumber)

  useEffect(() => {
    if (timer === 0) {
      dispatch(setTimeOut(true))
    } else {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer, dispatch])

  useEffect(() => {
    setTimer(3000)
  }, [questionNumber])

  return <>{timer}</>
}

export default Timer