import React from "react"


const Flowers = props => {
    const {title, imgsrc, desc, btn} = props
    console.log(props)
    return (
        <>
            <div className="cards">
                <h2>{title}</h2>
                <img src={imgsrc} />
                <p>{desc}</p>
                <button>{btn}</button>
            </div>
        </>
    )
}

export default Flowers