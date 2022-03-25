import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const CreateAuthor = props => {

    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const createAuthorHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, {
            "name": name
        })
        .then(res=>{
            console.log(res.data)
            navigate('/')
        })
        .catch(err => {
            console.log(`Error: ${err}`)
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div>
            <h2>Create Author</h2>
            <Link to={'/'}>Home</Link>
            <div className='myForm'>
                <form onSubmit={createAuthorHandler}>
                    <label>Name: </label>
                    <br />
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
export default CreateAuthor