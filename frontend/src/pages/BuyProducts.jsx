import React,{useEffect} from 'react'
import Layout from './Layout'
import Userlist from '../components/UserList'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import FormProductsInCart from '../components/FormProductsInCart';
import GetProducts from '../components/GetProducts';


const BuyProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError, user}= useSelector((state => state.auth));
  
    useEffect(() =>{
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() =>{
      if(isError){
        navigate("/");
      }
      {/*if(!user){
        navigate("/");
      }*/}
      if(user && user.role !== "user"){
        navigate("/forbidden");
      }
      
    }, [isError, user, navigate]);
    return (
      <Layout>
          <GetProducts />
      </Layout>
  
      )
  
  
}

export default BuyProducts