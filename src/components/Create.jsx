import React, { useState } from 'react'
import { useContext } from 'react';
import { productContext } from '../utils/context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Create = () => {
const navigate=useNavigate();
  const [products,setproducts]=useContext(productContext);
    const [title,settitle]=useState("");
    const [image,setimage]=useState("");
    const [category,setcategory]=useState("");
    const [price,setprice]=useState("");
    const [description,setdescription]=useState("");

    const addproductHandler=(e)=>{
      e.preventDefault();
if(title.trim().length<5||image.trim().length<5||category.trim().length<5||price.trim<1||description.trim().length<5)
{
  alert("each and every input must have at least 4 characters");
  return;
}



      const product={
        id:nanoid(),
        title,
        image,
        category,
        price,
        description
      }
      setproducts([...products,product]);
      localStorage.setItem("products",JSON.stringify([...products,product]) );
      toast.success("product added successfully");
      navigate('/');
      
    }
    
    
    
  return (
    <form onSubmit={addproductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className=' w-1/2 mb-5 text-3xl font-serif'>Add New Products</h1>
        <input type="url" placeholder='image link'className='text-1xl bg-zinc-100 rounded p-3 w-1/2 font-serif mb-3' onChange={(e)=>setimage(e.target.value)}
        value={image}
        />

        <input type="text" placeholder='title'className='text-1xl bg-zinc-100 rounded p-3 w-1/2 font-serif mb-3' onChange={(e)=>settitle(e.target.value)}
        value={title}
        />
        <div className='w-1/2 flex justify-between'>
        <input type="text" placeholder='category'className='text-1xl bg-zinc-100 rounded p-3 w-[48%] font-serif mb-3' onChange={(e)=>setcategory(e.target.value)}
        value={category}
        />

        <input type="number" placeholder='price'className='text-1xl bg-zinc-100 rounded p-3 w-[48%] font-serif mb-3' onChange={(e)=>setprice(e.target.value)}
        value={price}
        />
        </div>
        <textarea className='text-xl bg-zinc-100 rounded p-3 w-1/2 font-serif mb-3'rows="6" placeholder='enter product descrption here...' onChange={(e)=>setdescription(e.target.value)}
        value={description}></textarea>
        <div className='w-1/2'>
        <button className='px-4 py-2 border rounded border-blue-500 text-blue-500 font-serif'>add new products</button>
        </div>

    </form>
  )
}

export default Create