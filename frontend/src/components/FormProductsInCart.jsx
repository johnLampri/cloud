import React, { useState, useEffect } from 'react'
import axios from 'axios'




const FormProductsInCart = () => {
    const [products, setProductsOfCart] = useState([]);


    useEffect(() => {
        getProductsOfCart();
    }, [])
    const getProductsOfCart = async () => {
        const response = await axios.get("http://localhost:5000/carts");
        setProductsOfCart(response.data);
    }

    const deleteProductFromCart = async (productId) => {
        await axios.delete("http://localhost:5000/carts/" + productId);
        getProductsOfCart();
    };


    return (
        
        <div>
            <h1 className="title">Cart</h1>
            <h2 className="subtitle">List of Products in Cart</h2>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Date of Insertion</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.products.id}>
                            <td>{index + 1}</td>
                            <td>{product.products.name}</td>
                            <td>{product.products.price}</td>
                            <td>{product.products.cartproduct.dateOfInsertion}</td>
                            <td>
                                <button onClick={() => deleteProductFromCart(product.products.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FormProductsInCart