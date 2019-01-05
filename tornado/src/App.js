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
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
                    'is_tornado'  : false,
                    'points'   : 100
                },
                {
                    'id'   : uuid.v4(),
                    'text' : 'Что такое исильдур?',
                    'opened' : false,
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
                    />
                </div>
            );
    };

}

export default App;