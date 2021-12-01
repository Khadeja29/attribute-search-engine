import React from "react"

import "./imageGrid.css"

export default function ImageCard(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" />

        </div>
    )
}