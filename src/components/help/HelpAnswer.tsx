import { useDispatch, useSelector } from "react-redux"
import { setExcludedAnswers } from "../../store/slice/GameSlice"

import peopleIcon from "../../assets/helper/image-removebg-preview (10).png"
import phoneIcon from "../../assets/helper/image-removebg-preview (11).png"
import excludeIcon from "../../assets/helper/image-removebg-preview (12).png"
import { RootState } from "../../store/store"

const HelpAnswer = () => {
  const dispatch = useDispatch()
  const {isActiveExcluded, excludedAnswers} = useSelector((state: RootState) => state.game)
  
  const handleExcludeClick = () => {
    !isActiveExcluded && dispatch(setExcludedAnswers())
  }

  return (
    <div className="helpers" style={{ display: "flex" }}>
      <img className={isActiveExcluded ? "used" : ""} src={excludeIcon} onClick={handleExcludeClick} alt="Exclude Answer" />
      <img src={peopleIcon} alt="People Icon" />
      <img src={phoneIcon} alt="Phone Icon" />
    </div>
  )
}

export default HelpAnswer