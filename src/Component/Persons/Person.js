import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, } from '@fortawesome/free-solid-svg-icons'
import './Person.css';

const Person = (props) => {
    const { name, picture, designation, company, gender, honorarium } = props.person
    const cartIcon = <FontAwesomeIcon icon={faUser} />
    // console.log(props.person)
    return (
        <div className="col-md-4 p-4 avatar container">
            <div class="card mb-3">
                <div class="col g-0">
                    <img src={picture} class="card-img-top mt-4" style={{ "width": "200px" }} alt="..." />
                    <div class="card-body">
                        <h2 class="card-title">Name: {name}</h2>
                        <h4>Designation: {designation}</h4>
                        <h5>Company: {company}</h5>
                        <h6>Gender: {gender}</h6>
                        <p>Honorarium: ${honorarium}</p>
                        <button 
                        onClick={()=>props.handleAddToCart(props.person)}
                        className="btn btn-color">
                        {cartIcon} Click Me</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Person;

