//react
import React, { useState, useEffect } from "react"

//styles
import "./Footer.css"

const Footer = () => {
    const [count, setCount] = useState(0)
    const [isChanged, setIsChanged] = useState(false)

    useEffect(() => {
        if(count === 10) {
            setCount(0)
            setIsChanged(true)
        }
    }, [count])

    const increaseCounter = () => {
        setIsChanged(false)
        setCount(prev => prev += 1)
    }

    return(
        <footer className="footer">
            <div>
                <span>Click {" --> "}</span>
                <span
                    className="sub"
                    onClick={increaseCounter}
                >
                    Footer Count: {count} {isChanged ? "Changed!" : ""}
                </span>
            </div>
        </footer>
    )
}

export default Footer