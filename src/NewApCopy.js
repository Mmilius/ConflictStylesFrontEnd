import React, {Component} from 'react';
import "./App.css"
import QuizForm from './components/QuizForm';
import Nav from './Nav.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Categories from './Categories'

export default class App extends Component{
  state = {
    isNewQuizFormShowing: false,
    categories: []
  }

toggleNewForm = () => {
  this.setState({
    isNewQuizFormShowing: !this.state.isNewQuizFormShowing
  })
}

componentDidMount(){
  fetch('http://localhost:3000/categories')
  .then(response => response.json())
  .then(categories => {
    this.setState({categories})
  })
}

render () {

const {isNewQuizFormShowing, categories} = this.state

  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <main>
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
            <h2 className="quiz-title">New Quiz</h2>
            <QuizForm />
            </section>
          )
          : null
      }
  </main>
  <div>
    <Route path="/styles" render={(props) => <Categories categories = {categories}/>}/>
  </div>
  </Switch>
    </div>
    </Router>
  );
} 
}
