import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const ListAll = props => {

    const [authorList, setAuthorList] = useState([])
    const navigate = useNavigate()

    useEffect( ()=>{
        axios.get(`http://localhost:8000/api/authors`)
        .then(res=>{
            console.log(res.data)
            setAuthorList(res.data)
        })
        .catch(err => {console.log(err)})
    }, [])

    const navToEdit = (id) =>{
        console.log('you clicked the Edit button')
        navigate(`/edit/${id}`)
    }

    const deleteAuthor = (id) =>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            console.log(res.data)
            updateDom(id)
        })
        .catch(err => {console.log(err)})
    }

    const updateDom = (id) =>{
        setAuthorList(authorList.filter( a =>  id !== a._id )) 
    }

    return(
        <div>
            <h2>Favorite Authors</h2>
            <p><Link to={'/new'}>Add an author</Link></p>
            <table align="center">
                <thead><tr><th>Author</th><th>Actions Available</th></tr></thead>
                <tbody>
            {
                authorList.map( (a, index) => {
                    return(
                        <tr key={index}>
                            <td>{a.name}</td> 
                            <td><button onClick={ () => navToEdit( a._id )}>Edit</button>&nbsp;
                                <button onClick={ () => deleteAuthor(a._id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
            </tbody></table>
        </div>
    )
}
export default ListAll