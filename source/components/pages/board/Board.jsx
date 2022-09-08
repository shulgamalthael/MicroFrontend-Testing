//react
import React from "react"

const Board = ({ page, setPage }) => {
    return(
        <div>
            <div>Current Page: {page}.</div>
            <div className="sub-link" onClick={() => setPage("main")}>Back to main page.</div>
        </div>
    )
}

export default Board