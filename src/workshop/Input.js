import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input    onChange={props.change}     />
        </div>
    )
}
