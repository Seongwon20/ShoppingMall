import React, { useContext, useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { ShopContext } from '../context/ShopContext'
import Title from './Title.jsx'

const LatestCollection = () => {

    const {products}=useContext(ShopContext);
    const [latestProducts, setLatestProducts]=useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0, 10));
    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
      </div>

      {/*Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>

    </div>
  )
}

export default LatestCollection
