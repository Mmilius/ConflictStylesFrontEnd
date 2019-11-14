import React, {Component} from 'react'
import "../App.css"
import Questions from "./Questions"

export default class QuizForm extends Component{
    state = {
        newQuiz: {
            userName: "",
        relationship: ""},
        questions: []
    }
    

    componentDidMount(){
        fetch('http://localhost:3000/questions')
        .then(response => response.json())
        .then(questions => {
          this.setState({questions})
        })
      }

    handleChange = event => {
        const newQuiz = this.state.newQuiz
        newQuiz[event.target.name] = event.target.value
        this.setState({newQuiz})
    }


    render() {

        const {questions} = this.state

        return (
            <div>
            <form className="quiz-form" onSubmit={this.submitHandler}>
                <input className="user-name-input"
                    name="userName"
                    type="text"
                    required
                    value={this.state.newQuiz.userName}
                    placeholder="Your Name"
                    onChange={this.handleChange}
                    />
                <input className="relationship-input"
                    name="relationship"
                    type="text"
                    required
                    value={this.state.newQuiz.relationship}
                    placeholder="Spouse, girlfriend, boss, teacher, neighbor, sister, father..."
                    onChange={this.handleChange}
                    />
            </form>

              <section className="quiz-list">
              <Questions questions = {questions} /> 
          </section>
          </div>
        )
    }
}
