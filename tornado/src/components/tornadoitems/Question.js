import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Question = ({question, ...props}) => {

    return (
        <div className="col-md-4 tornado-question" onClick={props.onQuestionClick(question.id)}>
            <Card>
                <CardContent>
                    { props.opened === true ?
                        ( <div>{ question.text }</div> ) : '' }
                </CardContent>
                {
                    props.opened === true ? (
                        <CardActions>
                            <Button>Правильно</Button>
                            <Button>Неверно</Button>
                        </CardActions>
                    )  : ''
                }
            </Card>
        </div>
    );

};

export default Question;