import React from 'react'
import {Link} from 'react-router-dom'
import AuthorForm from './AuthorForm';

const AddAuthor = () => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to='/'>Home</Link>
            <AuthorForm></AuthorForm>
        </div>
    )
}

export default AddAuthor