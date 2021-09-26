import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';

const Sidecart = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faUser} />
    
    const {cart} = props;
    let total = 0;
    for ( const person of cart ) {
        total = total + person.honorarium;
    };

    return (
        <div className="mt-4">
                <h2>Person Added: {props.cart.length} </h2>
                <ul>{
                 cart.map(person => <li> {person.name} </li>)
            }
            </ul>
                <p>Total Cost: {total}</p>
                  <button className="btn btn-color">{cartIcon} Click Me</button>
        </div>
    );
};

export default Sidecart;