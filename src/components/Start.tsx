import { useState } from "react"
import announcerIcon from "../assets/announcer.png"
import ChooseCharacter from "./characters/ChooseCharacters"

const Start = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  
  return (
    <>  
      {isStarted ? <ChooseCharacter />
      : <div className="content">
        <div className="content_list">
          <img src={announcerIcon} />
          <span>Dear Player:</span>
          <span className="text">
            Welcome to the Who Wants to Be a Millionaire intellectual game! You will face 15 questions for a chance to win $3,000,000
          </span>
          <span> So, are you ready? </span>
          
          <div className="button_list">
            <button className="yes" onClick={() => setIsStarted(!isStarted)}> Yes </button>
            <button className="no" onClick={() => alert('Գնացեք պատրաստվելու')}> No </button>
          </div>
        </div>  
      </div>}
    </>
  )
}

export default Start