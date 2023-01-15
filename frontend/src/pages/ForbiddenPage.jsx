import React, {useEffect} from 'react'
import Layout from './Layout'
import Forbidden from '../components/Forbidden';
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const ForbiddenPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError}= useSelector((state => state.auth));

  useEffect(() =>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() =>{
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);


  return (<Layout>
    <Forbidden/>
  </Layout>);
};

export default ForbiddenPage;