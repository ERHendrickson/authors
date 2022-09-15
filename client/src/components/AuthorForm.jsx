import React, {useState} from 'react'
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom';

const AuthorForm = (props) => {

    const [errors, setErrors] = useState([]);

    const [formInfo, setFormInfo] = useState({
        name: ''
    })

    const {onSubmitProp, name} = props;

    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/author/new', formInfo)
        .then( (response) => {
            console.log(response)
            setFormInfo({
                name: ''
            })
            navigate('/')
        })
        .catch( (err) => {
            const errorResponse = err.response.data.err.errors
            const errorArr = []
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }



    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
                {errors.map((err, i) => <p key={i} className="text-danger"> {err}</p>)}
                <div>
                    <label>Name:</label>
                    <input type='text' name="name" value={formInfo.name} onChange={onChangeHandler}></input>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AuthorForm