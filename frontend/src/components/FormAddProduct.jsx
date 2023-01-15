import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"


const FormAddProduct = () => {
    const [name, setName] = useState("");
    const [productcode, setProductcode] = useState("");
    const [price, setPrice] = useState("");
    const [dateofwithdrawal, setDateofwithdrawal] = useState("");
    const [category, setCategory] =useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/products',{
                name: name,
                productcode: productcode,
                price: price,
                dateofwithdrawal: dateofwithdrawal,
                category: category
            });
            navigate("/products");
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div>
            <h1 className="title">Products</h1>
            <h2 className="subtitle">Add New Product</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveProduct} >
                            <p className = "has-text-centered">{msg}</p>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input type="text" className="input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Name' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Product Code</label>
                                <div className="control">
                                    <input type="text" className="input"
                                        value={productcode}
                                        onChange={(e) => setProductcode(e.target.value)}
                                        placeholder='Product Code' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Price</label>
                                <div className="control">
                                    <input type="text" className="input" 
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder='Price' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Date Of Withdrawal</label>
                                <div className="control">
                                    <input type="text" className="input" 
                                    value={dateofwithdrawal}
                                    onChange={(e) => setDateofwithdrawal(e.target.value)}
                                    placeholder='Date Of Withdrawal' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Category</label>
                                <div className="control">
                                    <input type="text" className="input" 
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    placeholder='Category' />
                                </div>
                            </div>
                         {/*   <div className="field">
                                <label className="label">Product Seller</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Product Seller' />
                                </div>
                            </div>*/}
                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success ">Save</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddProduct