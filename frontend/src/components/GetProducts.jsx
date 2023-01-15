import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const GetProducts = () => {
    const [products, setProducts] = useState([]);
  
  
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
      const response = await axios.get("http://localhost:5000/productsall");
      setProducts(response.data);
    }

    const AddToCart = async (productId) => {
        await axios.patch("http://localhost:5000/carts/update/"+productId);
    };


  return (
    <div>
    <h1 className="title">Products</h1>
    <h2 className="subtitle">List of Products</h2>
    <table className="table is-striped is-fullwidth">
        <thead>
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Product Code</th>
                <th>Price</th>
                <th>Date Of Withdrawal</th>
                <th>Category</th>
                <th>username</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index) => (
                <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.productcode}</td>
                    <td>{product.price}</td>
                    <td>{product.dateofwithdrawal}</td>
                    <td>{product.category}</td>
                    <td>{product.username}</td>
                    <td>
                        <button onClick={()=> AddToCart(product.id)} className="button is-small ">buy</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default GetProducts