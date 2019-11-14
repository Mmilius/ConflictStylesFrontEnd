import React, {Component} from 'react'

export default class Question extends Component{ 
        state = {
                newQuizResponse: {
                question_id: "",
                answer: ""
                }
        }

handleChange = event => {
        const newQuizResponse = this.state.newQuizResponse
        const {name, value} = event.target
        newQuizResponse[name] = value
        this.setState({newQuizResponse})
      }

render() {
        const {question, category} = this.props
      
    return (
        <div className="single-question">
                <form>
            <li>{question}</li>
            <p>{category}</p>
            <div className="radio-button-container">
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="1"
                    checked={this.state.newQuizResponse.answer === "1"}
                    onChange={this.handleChange}
                    /> Never
            </label> 
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="2"
                    checked={this.state.newQuizResponse.answer === "2"}
                    onChange={this.handleChange}
                    /> Seldom
            </label> 
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="3"
                    checked={this.state.newQuizResponse.answer === "3"}
                    onChange={this.handleChange}
                    /> Sometimes
            </label> 
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="4"
                    checked={this.state.newQuizResponse.answer === "4"}
                    onChange={this.handleChange}
                    /> Often
            </label> 
            <label> 
            <input className="question-input"
                    name="answer"
                    type="radio"
                    value="5"
                    checked={this.state.newQuizResponse.answer === "5"}
                    onChange={this.handleChange}
                    /> Always
            </label> 
            </div>
            </form>
        </div>
     
    )
}
}