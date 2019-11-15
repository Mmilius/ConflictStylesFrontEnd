import React from 'react'
import Question from "./Question"
import {Link} from 'react-router-dom'


export default function Questions(props){

    // const {handleFormSubmit} = props

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
                    <Link className="quiz-result-button" to="/success">Submit Quiz</Link>
                    {/* <button className="answer-button" >Submit Quiz</button>   */}
                </ol>
            </div>
    )
}