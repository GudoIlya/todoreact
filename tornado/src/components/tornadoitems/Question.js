import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Question extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {question, ...props} = this.props;
        return (
            <div className="col-md-4 tornado-question" onClick={this.handleClickQuestion}>
                <Card className={question.answered ? 'answered' : ''}>
                    <CardContent>
                        <div>
                        { question.opened === true ?
                            ( <div>{ question.text }</div> ) : '' }
                        {
                            question.opened === true ? (
                                    <div><Button onClick={this.rightAnswerQuestion}>Правильно</Button>
                                    <Button onClick={this.falseAnswerQuestion}>Неверно</Button></div>
                            )  : ''
                        }
                        </div>
                    </CardContent>

                </Card>
            </div>
        );
    }

    handleClickQuestion = (event) => {
        event.preventDefault();
        this.props.onQuestionClick(this.props.question.id);
    };

    rightAnswerQuestion = (event) => {
        event.preventDefault();
        this.answerQuestion(true);
    };

    falseAnswerQuestion = (event) => {
        event.preventDefault();
        this.answerQuestion(false);
    };

    answerQuestion = (result) => {
        if(result === undefined) {
            result = false;
        }
        console.log(result);
        this.props.answerQuestion(this.props.question.id, result);
    };

};

export default Question;