import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'


const ProductList = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    }

    const deleteProduct = async (productId) => {
        await axios.delete("http://localhost:5000/products/"+productId);
        getProducts();
    };

    return (
        <div>
            <h1 className="title">Products</h1>
            <h2 className="subtitle">List of Products</h2>
            <Link to="/products/add" className="button is-primary mb-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Id</th>
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
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.productcode}</td>
                            <td>{product.price}</td>
                            <td>{product.dateofwithdrawal}</td>
                            <td>{product.category}</td>
                            <td>{product.username}</td>
                            <td>
                                <Link to={'/products/edit/' + product.id}
                                    className="button is-small is-info">
                                    Edit
                                </Link>
                                <button onClick={()=> deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList