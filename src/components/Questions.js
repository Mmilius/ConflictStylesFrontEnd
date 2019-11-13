import React from 'react'
import Question from "./Question"

export default function Questions(props){
    const questions = props.questions.map(question => {
        return <Question 
                question_id={question.id}
                question={question.question}
                />
    })    
    return (
            <div className="question-container">
                <ol>
                    {questions}
                </ol>
            </div>
    )
}