import React, { useEffect, useState } from 'react';
import Person from '../Persons/Person';
import Sidecart from '../Sidecart/Sidecart';

const Cart = () => {
    const [persons, setPerson] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch("/fakePerson.json")
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])


    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart)
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row ">
                        {
                            persons.map(person =>
                                <Person
                                    person={person}
                                    handleAddToCart={handleAddToCart}
                                ></Person>
                            )
                        }

                    </div>
                    {/* akhane Cart add korbo  */}

                </div>
                <div className="col-md-3">
                    {/* akhane amra Cart calculation korbo  */}
                    <Sidecart cart={cart}></Sidecart>
                </div>
            </div>
        </div>
        
    );
};

export default Cart;