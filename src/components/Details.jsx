import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productContext } from '../utils/context'
import axios from '../utils/axios'
import Loading from './Loading'
import { toast } from 'react-toastify'
const details = () => {
 const navigate=useNavigate();
    const [products,setproducts]=useContext(productContext);
    const [product,setproduct]=useState(null);
  const { id } = useParams();
  
  //  const getsingleproduct=async()=>{
  //    try{
         
  //        const{data}=await axios(`/products/${id}`);
  //        setproduct(data);
         
  //      }catch(error){
  //        console.log(error);
  //      }
  //  };
   useEffect(()=>{
    if(!product){
    setproduct(products.filter((p)=>p.id==id)[0]);
    
    }
   },[]);

   const productDeleteHandler=(id)=>{
    const filteredproducts = products.filter((p)=>p.id!==id);
    setproducts(filteredproducts);
    localStorage.setItem("products",JSON.stringify(filteredproducts));
   
    navigate(-1);
   }
  return (product?
    <div className='w-[70%] flex justify-between items-center h-full m-auto p-[10%] '>
       <img className='object-contain h-[90%] w-[40%]' src={`${product.image}`} alt="" /> 
       <div className='content w-[50%]'>
        <h1 className='text-3xl text-bold font-serif'>{product.title}</h1>
        <h3 className='text-zinc-400 my-3 font-serif'>{product.category}</h3>
        <h2 className='text-red-400 mb-2 '>${product.price}</h2>
        <p className='text-sm mb-[7%] font-serif'>{product.description} </p>
        <Link to={`/edit/${product.id}`} className='mr-5 px-3 py-1 border rounded border-blue-500 text-blue-500 '>edit</Link>
        <button onClick={()=>productDeleteHandler(product.id)} className='px-3 py-1 border rounded border-red-500 text-red-500 '>delete</button>
       </div>
    </div>:<Loading/>
  )
}

export default details