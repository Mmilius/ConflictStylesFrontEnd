import React, {Component} from 'react'

export default function Question(props){

    return (
        <form>
        <div className="single-question">
            <li>{props.question}</li>
            <p>{props.category}</p>
            <div className="radio-button-container">
            <label> 
            <input className="question-input"
                    name="never"
                    type="radio"
                    value="Never"
                    /> Never
            </label> 
            <label> 
            <input className="question-input"
                    name="seldom"
                    type="radio"
                    value="Seldom"
                    /> Seldom
            </label> 
            <label> 
            <input className="question-input"
                    name="sometimes"
                    type="radio"
                    value="Sometimes"
                    /> Sometimes
            </label> 
            <label> 
            <input className="question-input"
                    name="often"
                    type="radio"
                    value="Often"
                    /> Often
            </label> 
            <label> 
            <input className="question-input"
                    name="always"
                    type="radio"
                    value="Always"
                    /> Always
            </label> 
            </div>
        </div>
        <button className="answer-button" type="submit">Submit Answer</button> 
        </form>
    )



}