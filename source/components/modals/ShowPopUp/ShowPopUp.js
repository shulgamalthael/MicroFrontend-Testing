//react
import React from "react"

//styles
import "./ShowPopUp.css"

const ShowPopUp = ({ isPopUp, showPopUp }) => {
    return <div className="wl-fb-showpopup" onClick={() => showPopUp(!isPopUp)}>Show</div>
}

export default ShowPopUp