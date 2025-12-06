'use client';

import {useState, useEffect} from 'react';
import {useParams} from 'next/navigation';

import Wrapper from '@/assets/wrappers/midterm/Shop_45';
import Product_45 from '@/components/midterm/Product_45';
 
const FetchShopByCategory_45 = () => {
    const [shop_45, setShop_45] = useState([]);
    const params = useParams();
    const category = params.category;
    console.log('category', category);

    const FetchShopFromNode = async () => {
        try {
            const response =await fetch(
                `http://localhost:5001/api/shop_45/${category}`
            );
            const data = await response.json();
            console.log('shop_45 data',data);
            if (data.length !==0) {
                setShop_45(data);
            }
        }catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        FetchShopFromNode();
    },[]);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4 className='text-center'> 周淵凱, 213410045 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_45?.map((item) => {
                const{pid, pname, price, img_url} =item;
            return (
            <Product_45
            key = {pid}
            img_url={img_url}
            price = {price}
            pname = {pname}
            />
            );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
 
export default FetchShopByCategory_45;