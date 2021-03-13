import React from 'react'
import './form.css'

export default function Form(props) {

   const {getUser, handleInput, uname} = props;
    return (
        <div className="form">
            <input className="textbar" placeholder="Search for username" value={uname} onChange={handleInput} name="uname"></input>
            <button className="button" onClick={getUser} >Search</button>
        </div>
    )
}
