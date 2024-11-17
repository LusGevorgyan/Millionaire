import { useDispatch, useSelector } from "react-redux"
import { setExcludedAnswers } from "../../store/slice/GameSlice"

import peopleIcon from "../../assets/helper/image-removebg-preview (10).png"
import phoneIcon from "../../assets/helper/image-removebg-preview (11).png"
import excludeIcon from "../../assets/helper/image-removebg-preview (12).png"
import replaceQuestionIcon from "../../assets/helper/replace.png"

import { RootState } from "../../store/store"
import { useState } from "react"

const HelpAnswer = () => {
  const [isActivePeople, setIsActivePeople] = useState<boolean>(false)
  const dispatch = useDispatch()
  const {isActiveExcluded, question, isActiveReplaceQuestion, excludedAnswers} = useSelector((state: RootState) => state.game)
  
  const handleExcludeClick = () => {
    !isActiveExcluded && dispatch(setExcludedAnswers())
  }
  
  return (
    <div className="helpers" style={{ display: "flex"}}>
      <img className={isActiveExcluded ? "used" : ""} src={excludeIcon} onClick={handleExcludeClick} alt="Exclude Answer" />
      <img className={isActivePeople ? "used" : ""} src={peopleIcon} onClick={() => setIsActivePeople(true)} alt="People Icon" />
      <img className={isActiveReplaceQuestion ? "used" : ""} src={replaceQuestionIcon} onClick={() => {}} alt="Replace Question Icon" />
      {isActivePeople && <div className="help_hall_active">
        <div className="help_hall_list">  
          <ul>
            {question?.answers.map((item, index) => (
              <div key={index} className="list">
                <div className="help_hall_percent">
                  <div className="percent_query">
                    <p className="list">{item.probability}%</p>
                    <div
                      style={{
                        background: 'white',
                        width: '20px',
                        height: `${item.probability}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="border"></div>
                <li className="list">{item.option}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>}
      <img src={phoneIcon} alt="Phone Icon" />
    </div>
  )
}

export default HelpAnswer