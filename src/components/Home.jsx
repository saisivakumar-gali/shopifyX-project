/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Nav from './nav'
import { Link, useLocation } from 'react-router-dom'
import { productContext }  from '../utils/context'
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {
 const [products]=useContext(productContext);
 const {search}=useLocation();
 const category=decodeURIComponent(search.split('=')[1]);
const [filteredproducts,setfilteredproducts]=useState(null);
 const getproductcategory=async()=>{
  try {
    const {data}=await axios.get(`/products/category/${category}`);
    setfilteredproducts(data);
  } catch (error) {
    console.error(error);
  }
};
useEffect(()=>{
  if(!filteredproducts||category=="undefined") setfilteredproducts(products);
if (category!='undefined') {
  setfilteredproducts(products.filter(p=>p.category==category));
}

},[category,products]);


  return products?(
    <>
 <Nav/>
    <div className=' h-full w-[85%]  p-5 pt-[4%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
      { filteredproducts && filteredproducts.map((p,i)=>(
        <Link key={p.id} to={`/Details/${p.id}`} className=' mr-3 mb-3 card p-4 border shadow-lg rounded w-[18%] h-[33vh] flex flex-col justify-center items-center'>
 <div className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
 style={{
   backgroundImage: 
   `url(${p.image})`
 }}>

 </div>
 <h1 className='hover:text-blue-300 text-sm font-serif  '>{p.title}
 </h1>
</Link>
      ))}
    
   
</div>
</>
  ):(
    <Loading/>
  )
};

export default Home;