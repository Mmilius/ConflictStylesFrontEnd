import React from 'react'

export default function Question(props){ 
        const {question, category, newQuizResponse, handleChange} = props

    return (
        <div className="single-question">
            <li>{question}</li>
            <p>{category}</p>
            <div className="radio-button-container">
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="1"
                    checked={newQuizResponse.answer === "1"}
                    onChange={handleChange}
                    /> Never
            </label> 
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="2"
                    checked={newQuizResponse.answer === "2"}
                    onChange={handleChange}
                    /> Seldom
            </label> 
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="3"
                    checked={newQuizResponse.answer === "3"}
                    onChange={handleChange}
                    /> Sometimes
            </label> 
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="4"
                    checked={newQuizResponse.answer === "4"}
                    onChange={handleChange}
                    /> Often
            </label> 
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="5"
                    checked={newQuizResponse.answer === "5"}
                    onChange={handleChange}
                    /> Always
            </label> 
            </div>
        </div>
     
    )



}