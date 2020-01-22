import React from 'react'
import './BuildControl.css'

export default function BuildControl(props) {
    return (
        <div className = "BuildControl">
            <div className = "label">{props.label}</div>
            <button 
                className = "Less" 
                onClick = {props.removed}
                disabled = {props.disabled}>Less</button>
            <button 
                classname = "More" 
                onClick = {props.added}>More</button>
        </div>
    )
}
