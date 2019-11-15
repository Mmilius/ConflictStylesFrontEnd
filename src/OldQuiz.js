import React, {Component} from 'react';
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


export default class App extends Component{
  state = {
    newQuiz: {
        userName: "",
        relationship: "",
    },
    questions: [],
  }


handleChange = event => {
    const newQuiz = this.state.newQuiz
    newQuiz[event.target.name] = event.target.value
    this.setState({newQuiz})
}

render () {

  return (
    <div className="App">
      <section className="quiz-intro">
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
                    placeholder="Spouse, boss, teacher, neighbor, sister, father..."
                    onChange={this.handleChange}
                    />
          </section>
    </div>
  );
} 
}
