import React  from 'react'
import {Link} from 'react-router-dom'

const Error = props => {

    return(
        <div>
            <img style={{ width:"300px", height:"240px"}} src='https://www.irishtimes.com/polopoly_fs/1.4584315.1622818730!/image/image.jpg_gen/derivatives/ratio_4x3_w1200/image.jpg' alt='foo'/>
            <br />
            "We're sorry, but we could not find the author you are looking for. 
            Would you like to add an author to our database?"
            <Link to={'/new'}>Create an Author</Link>
        </div>
    )
}
export default Error