import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTimeOut } from "../../store/slice/GameSlice"
import { RootState } from "../../store/store"

const Timer = () => {
  const dispatch = useDispatch()
  const [timer, setTimer] = useState(30)
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
    setTimer(30)
  }, [questionNumber])

  const calculateBorderColor = () => {
    const percentage = (timer / 30) * 100

    if (percentage > 50) {
      return "#159648"
    } else if (percentage > 20) {
      return "#F79321"
    } else {
      return "#BC0B37"
    }
  }

  const containerStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: `10px solid ${calculateBorderColor()}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '10px',
    left: '80px',
    fontSize: '30px',
    fontWeight: 700,
    transition: 'border-color 0.3s linear'
  } as any

  return (
    <div style={containerStyle}>
      {timer}
    </div>
  )
}

export default Timer