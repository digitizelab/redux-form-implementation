import React, {Component} from 'react';
//reduxForm is very similar to connect helper
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//To map an action creator we need connect helper
import {createPost} from '../actions/index';

class PostsNew extends Component {
    //field contains event handler to make sure Field is responsible for dealing with the text input
    renderField(field) {
        //Destructuring nested objects
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    //this is an object below & I want all of the different properties
                    //in the object to be communicated as props to the input tag
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit = (values) => {
        //create a post request
        this.props.createPost(values);
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    //values -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
    const errors = {};

    //Validate the input from 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if (!values.content) {
        errors.content = "Enter some content please";
    }

    //If errors is empty, the form is fine to submit
    //If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

//Stack up multiple connect like helpers
//Wiring up action creator with redux form
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);