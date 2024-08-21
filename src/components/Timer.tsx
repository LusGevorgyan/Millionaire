import React, { useEffect, useState } from "react";
import { ICallBackType } from "../shared/helpers/types";

interface TimerProps {
  setTimeOut: ICallBackType
  questionNumber: number
}

const Timer = ({ setTimeOut, questionNumber }: TimerProps) => {
  const [timer, setTimer] = useState(3000);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(3000);
  }, [questionNumber]);
  return <>{timer}</> ;
}

export default Timer