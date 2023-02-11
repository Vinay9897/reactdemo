import React from "react";
import Product from "./Product.js";
function ProductDetails() {
    var productDetail =
    {
        // pdtCode: 123901239412,
        pdtName: "Gamia Laptop",
        pdtPrice: "33000",
        pdtDescription: "An excellent choice for an awesome gaming experience",
        img: "Images/laptop.jpg",
        rating: "3",
        isDiscontinued: false
    };
    return (<div>
        <Product {...productDetail} />
    </div>)
}
export default ProductDetails;


