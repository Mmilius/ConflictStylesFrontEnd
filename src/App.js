import React, {Component} from 'react';
import "./App.css"
import QuizForm from './components/QuizForm';
import Nav from './Nav.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Categories from './Categories'
import Home from './Home'
import Success from './Success'

export default class App extends Component{
  state = {
    // isNewQuizFormShowing: false,
    categories: []
  }

// toggleNewForm = () => {
//   this.setState({
//     isNewQuizFormShowing: !this.state.isNewQuizFormShowing
//   })
// }

componentDidMount(){
  fetch('http://localhost:3000/categories')
  .then(response => response.json())
  .then(categories => {
    this.setState({categories})
  })
}


render () {

const {categories} = this.state


  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quiz" exact component={QuizForm} />
        <Route path="/styles" exact render={(props) => <Categories categories = {categories}/>}/>
        <Route path="/success" exact render={(props) => <Success categories = {categories}/>}/>
        {/* <Route path="/success" exact component={Success}/> */}
        </Switch>
         </div>
    </Router>
  );
} 
}
