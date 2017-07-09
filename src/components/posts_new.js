import React, {Component} from 'react';
//reduxForm is very similar to connect helper
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    //field contains event handler to make sure Field is responsible for dealing with the text input
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    //this is an object below & I want all of the different properties
                    //in the object to be communicated as props to the input tag
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <form>
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
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);