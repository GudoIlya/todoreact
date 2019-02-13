import React from 'react';
import { Formik } from 'formik';

class Todoform extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-form row">
                <Formik
                    initialValues={{
                        task : '',
                        project : 'Без проекта',
                        is_done : false
                    }}
                    onSubmit={(values, { initialValues, setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            console.log();
                            this.props.onAddTask(values);
                            setSubmitting(false);
                            resetForm(initialValues);
                        }, 400);
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form className="form-inline" onSubmit={handleSubmit}>
                            <div className="liWrapper">
                            <label htmlFor="" className="floating-label">Задача</label>
                            <input className="form-control" type="text"
                                onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.task}
                                   name="task"
                            />
                            {errors.name && <div id="feedback">{errors.task}</div>}
                            </div>
                            <div className="liWrapper">
                            <label htmlFor="" className="floating-label">Проект</label>
                            <input className="form-control" type="text"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.project}
                                   name="project"
                            />
                            {errors.project && <div id="feedback1">{errors.project}</div>}
                            </div>
                            <button className="btn btn-success" type="submit">Добавить</button>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}


export default Todoform;