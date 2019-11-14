import React, {Component} from 'react';
import "./App.css"
import Questions from './components/Questions'
import QuizForm from './components/QuizForm';
import Nav from './Nav.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


export default class App extends Component{
  state = {
    questions: [],
    isNewQuizFormShowing: false,
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

const {questions, isNewQuizFormShowing} = this.state

  return (
    <Router>
    <div className="App">
      <Nav />
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
          <Questions 
            questions = {questions}
            // newQuizResponse = {newQuizResponse}
            // handleChange={this.handleChange}
          />
        
      </section>

    </div>
    </Router>
  );
} 
}
