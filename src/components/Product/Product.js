import React from 'react';
import './Product.css'



const Product = (props) => {

    const {name,email} = props.product;
    return (
        <div className='product'>
            
            <div>
            <h5>{email}</h5>
            </div>
            <div>
                <h2>{name}</h2>
                <button className='main-btn' 
                onClick={() => props.handelAddProducts(props.product)}
                >Add To Cart</button>
            </div>
          
            
        </div>
    );
};

export default Product;