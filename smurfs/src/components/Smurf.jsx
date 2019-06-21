import React from "react"

export default function Smurf(props){

    return (
        <div className="smurf">
              <h2>{props.name}</h2>
              <div>Age: {props.age}</div>
              <div>Height: {props.height}</div>
        </div>
    )
}