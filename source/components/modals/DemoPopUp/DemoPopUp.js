//react
import React, { useState } from "react"

//styles
import "./DemoPopUp.css"

//components
import PopUp from "../PopUp/PopUp"
import ShowPopUp from "../ShowPopUp/ShowPopUp"

const DemoPopUp = () => {
    const [isPopUp, showPopUp] = useState(false)

    return(
        <div className="wl-fb-demo-popup-wrapper">
            {isPopUp && <PopUp isPopUp={isPopUp} showPopUp={showPopUp} />}
            {!isPopUp && <ShowPopUp isPopUp={isPopUp} showPopUp={showPopUp} />}
        </div>
    )
}

export default DemoPopUp