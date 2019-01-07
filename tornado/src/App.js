import React from 'react';
import Tornado from './components/Tornado/Tornado';
import uuid  from 'uuid';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions : [
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'answered' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'answered' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'answered' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'answered' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'answered' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'answered' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'answered' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'answered' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'answered' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                }
            ],
            teams : [
                {
                    'id'   : uuid.v4(),
                    'name' : 'Команда 1',
                    'points' : 0,
                    'answered_questions' : 0,
                    'avatar' : 'no-image.jpg'
                },
                {
                    'id'   : uuid.v4(),
                    'name' : 'Команда 2',
                    'points' : 0,
                    'answered_questions' : 0,
                    'avatar' : 'no-image.jpg'
                }
            ]
        };
    }

    render = () => {
        return (
                <div>
                    <Tornado
                        questions={this.state.questions}
                        teams={this.state.teams}
                        openQuestion={this.openQuestion}
                        answerQuestion={this.answerQuestion}
                    />
                </div>
            );
    };

    openQuestion = (id) => {
        let questions = this.state.questions.slice();
        questions.map(function (question, index) {
            if(question.id === id) {
                question.opened = true;
            } else {
                question.opened = false;
            }
        });
        this.setState({questions : questions});
    };

    answerQuestion = (id, result) => {
        let questions = this.state.questions.slice();
        questions.map(function(question, index) {
            console.log(id === question.id);
            if(question.id === id) {
                question.answered = result;
                question.opened = false;
            }
            console.log(question);
        });
        this.setState({ questions : questions });
    }
}

export default App;