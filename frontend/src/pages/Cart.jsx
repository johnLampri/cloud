import React, {useEffect} from 'react'
import Layout from './Layout'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import FormProductsInCart from '../components/FormProductsInCart';

const Cart = () => {
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
          <FormProductsInCart />
      </Layout>
  
      )
  
  }

  export default Cart