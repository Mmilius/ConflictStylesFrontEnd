import React, {Component} from 'react'

export default function Question(props){

    return (
        <div className="single-question">
            <li>{props.question}</li>
            <p>{props.category}</p>
    


        </div>
    )



}