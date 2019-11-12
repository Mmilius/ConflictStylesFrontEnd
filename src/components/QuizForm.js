import React, {Component} from 'react'
import "../App.css"

export default class QuizForm extends Component{
    state = {
        newQuiz: {
            userName: "",
        relationship: "",
    }
    }

    handleChange = event => {
        const newQuiz = this.state.newQuiz
        newQuiz[event.target.name] = event.target.value
        this.setState({newQuiz})
    }


    render() {
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
                    type="relationship"
                    required
                    value={this.state.newQuiz.relationship}
                    placeholder="Spouse, boss, teacher, neighbor, sister, father..."
                    onChange={this.handleChange}
                    />

                <input type="submit" className="submit-button" value={this.props.submitLabel}/>
            </form>
            </div>
        )
    }
}
