import React, { useRef } from "react"
import { ICallBackType } from "../shared/helpers/types"

interface StartProps {
  setUsername: ICallBackType 
}

const Start: React.FC<StartProps> = ({ setUsername }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value) {
      setUsername(inputRef.current.value)
    }
  }

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  )
}

export default Start