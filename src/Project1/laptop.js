import React from 'react';
import Ratar from './Ratar.js';

function Product() {
    return (
        <div className='thumbnail' style={{ textAlign: "center", }}>
            <div className='row' style={{ background: "green", border: "2px solid pink" }} >
                <div className="img-box box">
                    <img src={"img1.jpg"} alt="not_found" />
                </div>
                <div className='box'>
                    <div className='box1'>
                        <h3>Game LapTop</h3>
                        <br></br>
                        <h4>Rs.33000</h4>
                        <p>An excellent  choice for an awesome gaming experience.</p>
                        <Ratar />
                        <span style={{ fontSize: "9px" }}>3/5</span>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Product;