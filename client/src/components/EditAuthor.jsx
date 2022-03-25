import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const EditAuthor = props => {

    const [author, setAuthor] = useState({})
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            console.log(res.data)
            setAuthor(res.data)
            setName(res.data.name)
        })
        .catch(err => {
            console.log(err)
            navigate('/error')
        })

    }, [])

    const EditAuthorHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, { 
            "name": name
        })
        .then(res=>{
            console.log(res.data)
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div>
            <h2>Edit Author</h2>
            <Link to={'/'}>Home</Link>
            <div className='myForm'>
                <form onSubmit={EditAuthorHandler}>
                    <label>Author: </label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                    <br />
                    <button onClick={() => navigate('/')}>Cancel</button>
                    <button>Submit</button>
                    {
                        errors.name ?
                        <p className='errors'>{errors.name.message}</p>
                        : null
                    }
                </form>
            </div>
        </div>
    )
}
export default EditAuthor