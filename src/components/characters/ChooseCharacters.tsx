import React, { useState } from "react"
import "./ChooseCharacter.css"
import characterList from "./choseCharacterList"
import BackIcon from "../../assets/backIcon.png"
import SelectIcon from "../../assets/selectIcon.png"
import { useDispatch } from "react-redux"
import { setPeople } from "../../store/slice/PeopelSlice"

const ChooseCharacter = () => {
    const dispatch = useDispatch()
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextCharacter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % characterList.length)
    }

    const prevCharacter = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + characterList.length) % characterList.length)
    }

    const selectedCharacter = characterList[currentIndex]

    const handleEnterCharacter = () => {
        dispatch(setPeople(selectedCharacter))
    }

    return (
        <div className="container">
            <div className="character">
                <div className="character-header">
                    <div className="bg-gradient" style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <div className="character-icon-container"> 
                            <i className="fas fa-users character-icon"></i> 
                            <div className="icon-border"></div> 
                        </div> 
                        <h2 style={{color: "#311328", fontSize: "28px", marginLeft: "12px", fontWeight: 700}}>CHOOSE YOUR CHARACTER</h2>
                    </div>
                </div>

                <div className="bg-gradient">
                    <div className="change-people" style={{display: "flex", width: "100%", gap: "15px", alignItems: "center", justifyContent: 'flex-start'}}>
                        <i className="fas fa-chevron-left" onClick={prevCharacter}></i>
                        <h1 style={{color: "#311328", width: '150px', textAlign: 'center', fontWeight: 700}}>{selectedCharacter.name}</h1>
                        <i className="fas fa-chevron-right" onClick={nextCharacter}></i>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: "column", gap: '15px'}}>
                    <div>
                        <div className="title-bg">
                            <div className="rotate" style={{ marginRight: '20px' }}></div>Age:
                        </div>
                        <div className="bg-gradient">
                            <h1>{selectedCharacter.age}</h1>
                        </div>
                    </div>

                    <div>
                        <div className="title-bg">
                            <div className="rotate" style={{ marginRight: '20px' }}></div>Profession:
                        </div>
                        <div className="bg-gradient">
                            <h1>{selectedCharacter.profession}</h1>
                        </div>
                    </div>

                    <div>
                        <div className="title-bg">
                            <div className="rotate" style={{ marginRight: '20px' }}></div>Hobby:
                        </div>
                        <div className="bg-gradient">
                            <h1>{selectedCharacter.hobby}</h1>
                        </div>
                    </div>
                </div>

                <div className="character-footer">
                    <h1 style={{color: "#D9B23B", fontWeight: 700}}>PLAYER {selectedCharacter.id}</h1>
                    <div className="buttons-list">
                        <div className="button-item" onClick={handleEnterCharacter}>
                            <img src={BackIcon} height={40}/>
                            <h4 style={{color: "#ffff", fontWeight: 700}}>SELECT</h4>
                        </div>

                        <div className="button-item">
                            <img src={SelectIcon} height={40}/>
                            <h4 style={{color: "#ffff", fontWeight: 700}}>BACK</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="avatar">
                <img height="100%" width="100%" src={selectedCharacter.avatar} alt={selectedCharacter.name}/>
            </div>
        </div>
    )
}

export default ChooseCharacter