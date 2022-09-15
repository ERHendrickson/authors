import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const AuthorMain = () => {
    const [refreshToggle, setRefreshToggle] = useState(false)
    const [allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((response) => {
            console.log(response.data.results)
            setAllAuthors(response.data.results)
        })
        .catch((err) => console.log('err loading all products: ', err))
    }, [refreshToggle])

    const deleteAuthor = (e, id) => {
        console.log('deleting author', id)
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
        .then((response) => {
            console.log("delete was successful", response)
            setRefreshToggle(!refreshToggle)
        })
        .catch((err) => console.log("something went wrong deleting" , err))
    }
    
    return (
        <div>
            <h1>Favorite Authors</h1>
            <div>
                <Link to='/new'>Add an Author</Link>
                <p>We have quotes by:</p>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAuthors.map((author, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{author.name}</td>
                                        <td><Link to={`/edit/${author._id}`} className="btn btn-warning">Edit</Link> | 
                                            <button className='btn btn-danger' onClick={(e) => {deleteAuthor(e, author._id)}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AuthorMain