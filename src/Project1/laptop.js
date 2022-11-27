import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Product() {
    return (
        <div className='thumbnail' style={{ textAlign: "center" }}>
            <div className='row'>
                <div className="img-box box">
                    <img href='https://infyspringboard.onwingspan.com/common-content-store/Shared/Shared/Public/lex_10991335737918820000_shared/web-hosted/assets/laptop1653470544360.jpg' alt="image"></img>
                </div>
                <div className='box'>
                    <div className='box1'>
                        <h3>Game LapTop</h3>
                        <br></br>
                        <h4>Rs.33000</h4>
                        <p>An excellent choice for an awesome gaming experience.</p>
                        <Rater />
                        <span style={{ fontSize: "9px" }}>3/5</span>
                    </div>
                </div>

            </div>
        </div >

    )
}