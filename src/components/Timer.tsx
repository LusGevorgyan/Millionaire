  import React, { useEffect, useState } from "react";
  import { ICallBackType } from "../shared/helpers/types";

  interface TimerProps {
    setTimeOut: ICallBackType
    questionNumber: number
  }
  
  const Timer: React.FC<TimerProps> = ({ setTimeOut, questionNumber }) => {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
      if (timer === 0) return setTimeOut(true);
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }, [timer, setTimeOut]);

    useEffect(() => {
      setTimer(30);
    }, [questionNumber]);
    return timer;
  }

  export default Timer