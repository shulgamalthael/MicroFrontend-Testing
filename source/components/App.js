//react
import React, { useState } from "react"

//styles
import "./App.css"

//components
import PopUp from "./modals/PopUp/PopUp"
import Header from "./common/header/Header"
import Footer from "./common/footer/Footer"
import Content from "./common/content/Content"
import ShowPopUp from "./modals/ShowPopUp/ShowPopUp"

const App = () => {
    const [isPopUp, showPopUp] = useState(true)

    return(
        <div className="wrapper">
            <Header />
            <Content isApp />
            <Footer />
            {isPopUp && <PopUp isPopUp={isPopUp} showPopUp={showPopUp} />}
            {!isPopUp && <ShowPopUp isPopUp={isPopUp} showPopUp={showPopUp} />}
        </div>
    )
}

export default App