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