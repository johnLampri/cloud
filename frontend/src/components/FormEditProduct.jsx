import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const FormEditProduct = () => {

    const [name, setName] = useState("");
    const [productcode, setProductcode] = useState("");
    const [price, setPrice] = useState("");
    const [dateofwithdrawal, setDateofwithdrawal] = useState("");
    const [category, setCategory] =useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(()=>{
        const getProductById = async() =>{
            try{
                const response = await axios.get('http://localhost:5000/products/'+id);
                setName(response.data.name);
                setProductcode(response.data.productcode);
                setPrice(response.data.price);
                setDateofwithdrawal(response.data.dateofwithdrawal);
                setCategory(response.data.category);


            }catch(error){
                if(error.response){
                    setMsg(error.response.data.msg)
                }
            }
        }
        getProductById();
    },[id])

    const updateProduct = async(e) => {
        e.preventDefault();
        try{
            await axios.patch('http://localhost:5000/products/'+id,{
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
            <h2 className="subtitle">Edit Product</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateProduct}>
                            <p className="has-text-centered">{msg}</p>
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
                            <div className="field">
                                <div className="control">
                                    <button type= "submit" className="button is-success ">Edit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEditProduct