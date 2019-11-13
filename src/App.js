import React, {Component} from 'react';
import "./App.css"
import Questions from './components/Questions'
import QuizForm from './components/QuizForm';

// import QuizForm from './components/QuizForm'

export default class App extends Component{
  state = {
    questions: [],
    isNewQuizFormShowing: false,

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

componentDidMount(){
  fetch('http://localhost:3000/questions')
  .then(response => response.json())
  .then(questions => {
    this.setState({questions})
  })
}

toggleNewForm = () => {
  this.setState({
    isNewQuizFormShowing: !this.state.isNewQuizFormShowing
  })
}

render () {

const {questions, isNewQuizFormShowing, newQuizResponse} = this.state

  return (
    <div className="App">
      <button className="toggle-new-quiz" onClick={this.toggleNewForm}> 
        <span>
        {
          isNewQuizFormShowing
            ? "-"
            : "Take New Quiz"
        }
        </span>
      </button>
      {
        isNewQuizFormShowing
          ? (
            <section>
            <h2>New Quiz</h2>
            <QuizForm/>
            </section>
          )
          : null
      }
      <section className="quiz-list">
        <ol>
          <Questions 
            questions = {questions}
            newQuizResponse = {newQuizResponse}
            handleChange={this.handleChange}
          />
        </ol>
      </section>

    </div>
  );
} 
}
