//react
import React from "react"

//styles
import "./Main.css"

const Main = ({ page, setPage }) => {
    return(
        <div>
            <div>Current Page: {page}.</div>
            <div className="sub-link" onClick={() => setPage("board")}>To Board</div>
        </div>
    )
}

export default Main