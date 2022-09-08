//react
import React, { useState, useEffect } from "react"

//styles
import "./Header.css"

const Header = () => {
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
        <header className="header">
            <div>
                <span>Click {" --> "}</span>
                <span
                    className="sub"
                    onClick={increaseCounter}
                >
                    Header Count: {count} {isChanged ? "Changed!" : ""}
                </span>
            </div>
        </header>
    )
}

export default Header