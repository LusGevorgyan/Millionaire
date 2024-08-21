import React, { useRef, useState } from "react"
import { ICallBackType } from "../shared/helpers/types"
import announcerIcon from "../assets/announcer.png"

interface StartProps {
  setUsername: ICallBackType 
}

const Start: React.FC<StartProps> = ({ setUsername }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isStarted, setIsStarted] = useState<boolean>(false)

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value) {
      setUsername(inputRef.current.value)
    }
  }

    return (
      <>  
        {isStarted ? <div className="start">
          <input
            className="startInput"
            placeholder="Enter your name"
            ref={inputRef}
          />
          <button className="startButton" onClick={handleClick}>
            Start
          </button>
        </div> : <div className="content">
          <div className="content_list">
            <img src={announcerIcon} />
            <span>Հարգելի խաղացող:</span>
            <span className="text">Բարի գալուստ «Ո՞վ է ուզում դառնալ միլիոնատեր» ինտելեկտուալ խաղ: Ձեզ սպասվում է 15 հարց 3000000 ձեռք բերելու համար:</span>
            <span> Այսպիսով դուք պատրաստ ե՞ք </span>
            
            <div className="button_list">
              <button className="yes" onClick={() => setIsStarted(!isStarted)}> ԱՅՈ </button>
              <button className="no" onClick={() => alert('Գնացեք պատրաստվելու')}> ՈՉ </button>
            </div>
          </div>  
        </div>}
    </>
  )
}

export default Start