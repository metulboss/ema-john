import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([])

    

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])

    const [cart,setCart] = useState([])

    const handelAddProduct = () => {
       const newCart = [...cart,Product]
       setCart(newCart);

    }
    return (
        
        <div className='shop-container'>
            <div className="products-container">
                {
                products.map(pd => <Product handelAddProducts ={handelAddProduct}
                product= {pd}>
                </Product>)
                }
            </div>

            <div className="cart-container">
                <h3>This Is Cart</h3>
                <h5>Order Summery :{cart.length}</h5>
            </div>

          
        </div>
    );
};

export default Shop;