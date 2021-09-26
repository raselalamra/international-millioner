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
        <div class="card card-style mt-4">
            <div class="card-body">
                <h2>CEO Added: {props.cart.length} </h2>
                <h3 class="card-title">Name Add: {} </h3>
                <p>Total: ${total}</p>
                  <button className="btn btn-color">{cartIcon} Click Me</button>
            </div>
        </div>
    );
};

export default Sidecart;