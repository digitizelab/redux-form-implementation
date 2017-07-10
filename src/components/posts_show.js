import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPost} from '../actions';

class PostShow extends Component {
    componentDidMount() {
        //Router method to access params
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/" className="btn btn-primary">Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

//posts here because we are using the posts reducer
//ownProps is the props object going to this component
//this.props === ownProps
function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost})(PostShow);