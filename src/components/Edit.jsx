/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productContext } from '../utils/context';
import { nanoid } from 'nanoid';

const Edit = () => {

  const [products,setproducts]=useContext(productContext);
    const navigate=useNavigate();
  
  const {id}=useParams();
  const [product,setproduct]=useState({
    title:'',
    image:'',
    category:'',
    price:'',
    description:''
  });
const changeHandler=(e)=>{
  console.log(e.target.name,e.target.value)
  setproduct({...product,[e.target.name]:e.target.value});
}

    useEffect(()=>{
      setproduct(products.filter((p)=>p.id==id)[0]);
    },[id]);

    const addproductHandler=(e)=>{
      e.preventDefault();
if(product.title.trim().length<5||
product.image.trim().length<5||
product.category.trim().length<5||
product.price.trim<1||
product.description.trim().length<5)
{
  alert("each and every input must have at least 4 characters");
  return;
}


const pi=products.findIndex((p)=>p.id==id)
const copydata=[...products];
copydata[pi]={...products[pi],...product}
 
      setproducts(copydata);
      localStorage.setItem("products",JSON.stringify(copydata) );
      navigate(-1);
      
    }
    
  return (
    <form onSubmit={addproductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
    <h1 className=' w-1/2 mb-5 text-3xl font-serif'>Edit Product</h1>
    <input type="url" placeholder='image link'className='text-1xl bg-zinc-100 rounded p-3 w-1/2 font-serif mb-3' name='image' onChange={changeHandler}
    value={product && product.image}
    />

    <input type="text" placeholder='title'className='text-1xl bg-zinc-100 rounded p-3 w-1/2 font-serif mb-3' name='title' onChange={changeHandler}
    value={product && product.title}
    />
    <div className='w-1/2 flex justify-between'>
    <input type="text" placeholder='category'className='text-1xl bg-zinc-100 rounded p-3 w-[48%] font-serif mb-3' name='category' onChange={changeHandler}
    value={product && product.category}
    />

    <input type="number" placeholder='price'className='text-1xl bg-zinc-100 rounded p-3 w-[48%]  mb-3' name='price' onChange={changeHandler}
    value={product && product.price}
    />
    </div>
    <textarea className='text-xl bg-zinc-100 rounded p-3 w-1/2 font-serif mb-3'rows="6" placeholder='enter product descrption here...' name='description' onChange={changeHandler}
    value={product && product.description}></textarea>
    <div className='w-1/2'>
    <button className='px-4 py-2 border rounded border-blue-500 text-blue-500 font-serif'>Edit product</button>
    </div>

</form>
  )
}

export default Edit