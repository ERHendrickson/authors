import AuthorForm from './AuthorForm'
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router'

const EditAuthor = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({
        name: ''
    });

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((response) => {
                console.log(response)
                setFormInfo(response.data.results)
            })
            .catch(err => console.log("Edit page get request Error: ", err))
    }, [id])

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/update/${id}`, formInfo)
        .then(response => {
            console.log("edit put request: ", response)
            navigate('/')
        })
        .catch( (err) => {
            const errorResponse = err.response.data.err.errors
            console.log(errorResponse)
            const errorArr = []
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    const deleteAuthor = (e, id) => {
        console.log('deleting author', id)
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
        .then((response) => {
            console.log("delete was successful", response)
        })
        .catch((err) => console.log("something went wrong deleting" , err))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to='/'>Home</Link>
            <form onSubmit={submitHandler}>
                {errors.map((err, i) => <p key={i} className="text-danger"> {err}</p>)}
                <div>
                    <label>Name:</label>
                    <input type='text' name="name" value={formInfo.name} onChange={onChangeHandler}></input>
                </div>
                <div>
                    <button>Submit</button>
                </div>
                <button className='btn btn-danger' onClick={(e) => {deleteAuthor(e, formInfo._id)}}>Delete</button>
            </form>
        </div>
    )
}

export default EditAuthor