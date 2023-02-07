import Proptype from 'prop-types';
import React from 'react';

// Create a component with properties defined for
// it and validate these props using PropTypes

function Comp(props) {
    return (
        <>
            <div className="card w-25">
                <div className="card-body">
                    <h5 className="card-title">{props.productName} - {props.colors} </h5>

                    <p className="card-text">Price:
                        {props.price}
                    </p>
                    {props.availability ? null : <p className="text-danger">Product out of stock</p>}
                    <p>Rating: {props.feedback.rating}</p>
                    <button onClick={props.addToCart} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

Comp.propType = {
    productName: Proptype.string.isRequired,
    price: Proptype.number,
    colors: Proptype.colors,
    availability: Proptype.bool,
    feedback: Proptype.object,
    addToCart: Proptype.func,
};

Comp.defaultProps = {
    productName: "iPhone",
    price: "36000",
    colors: ["Black"],
    availability: true,
    feedback: {
        rating: 4,
        comments: "good",
    },
    addToCart: function (e) {

    }
};

export default Comp;

