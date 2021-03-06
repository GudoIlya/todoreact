import React from 'react';
import Question from '../tornadoitems/Question';

class TornadoBoard extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        let {questions, openQuestion, answerQuestion, ...props} = {...this.props};
        return (
            <div className="tornado-board row">
                {questions.length ? questions.map((question, index) => {
                        return (
                            <Question key={index} question={question} onQuestionClick={openQuestion}
                                      answerQuestion={answerQuestion}
                            />
                        );
                    }
                ) : "Нет вопросов для Вас;"}
            </div>
        );
    };

}

export default TornadoBoard;