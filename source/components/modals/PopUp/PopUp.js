//react
import React from "react"

//styles
import "./PopUp.css"

const PopUp = ({ isPopUp,showPopUp }) => {
    const closeClick = () => {
        if(!showPopUp) return
        showPopUp(!isPopUp)
    }
    
    return(
        <div className="wl-fb-popup">
            <div 
                onClick={closeClick}
                className="wl-fb-popup-close"
            >+</div>
            <div>It`s a FitBuilder PopUp</div>
        </div>
    )
}

export default PopUp