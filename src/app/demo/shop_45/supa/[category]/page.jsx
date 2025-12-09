'use client';

import {useState, useEffect} from 'react';
import {useParams} from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_45';
import Product_45 from '../../_components/Product_45';
import { supabase } from '@/db/clientSupabase';
 
const FetchShopByCategory_45 = () => {
    const [shop_45, setShop_45] = useState([]);
    const params = useParams();
    const category = params.category;
    // console.log('category', category);

    const FetchShopFromSupabase = async () => {
        try {
          let { data, error } = await supabase
  .from('category2_45')
  .select('*, shop2_45(*)')
  .eq('cname', category);
            console.log('data',data[0].shop2_45);
            if (data.length !==0) {
                setShop_45(data[0].shop2_45);
            }
        }catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        FetchShopFromSupabase();
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