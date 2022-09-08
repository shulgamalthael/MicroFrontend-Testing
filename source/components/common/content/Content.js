//react
import React, { useState } from "react"

//styles
import "./Content.css"

//components
import Main from "../../pages/main/Main"
import Board from "../../pages/board/Board"

const Content = ({ isApp }) => {
    const [page, setPage] = useState("main")

    const renderPage = _page => {
        switch(_page) {
            case "main": return Main
            case "board": return Board
            default: return Main
        }
    }
    
    const Page = renderPage(page)
    const PageProps = {page, setPage}

    const contentClass = isApp ? "content" : "content single-content"

    return(
        <main className={contentClass}>
            <Page {...PageProps} />
        </main>
    )
}

export default Content