import React from 'react'
import Question from "./Question"


export default function Questions(props){

    const {handleFormSubmit} = props

    function questionList(){
        const {questions} = props
    
        return questions.map(question => {
        return <Question 
            question_id={question.id}
            question={question.question}
        /> 
    })    
}  

    return (
            <div className="question-container">
                
              
                <ol>
                    {questionList()}
                    <button className="answer-button" type="submit">Submit Quiz</button>  
                </ol>
            </div>
    )
}