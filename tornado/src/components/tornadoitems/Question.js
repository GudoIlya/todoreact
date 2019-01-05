import React from 'react';

const Question = ({question, onQuestionClic, ...props}) => {

    return (
        <div className="col-md-4 tornado-question" onClick={onQuestionClick(question.id)}>
            +
        </div>
    );

};

export default Question;