'use client';

import { useState, useEffect } from 'react';
import {nanoid} from 'nanoid';
import { ToastContainer, Toast, toast } from 'react-toastify';

import Form from './_components/Form_45';
import Items from './_components/Items_45';

import Wrapper from '../_assets/wrapper/Grocery_45';

const getLocalStorage = () => {
  if(typeof window !== 'undefined') {
    let list = localStorage.getItem(`list`);
    if (list) {
      list = JSON.parse(list);
    } else {
      list = [];
    } 
    return list;
  }
  return [];
};

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const GroceryPage_45 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedList = getLocalStorage();
    if (storedList.length >0) {
      setItems(storedList);
    }
  }, []);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id:nanoid (),
  };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added successfully!');
  };

  return (
    <Wrapper>
      <section className='section-center'>
        <ToastContainer position='top-center' autoClose={3000} />
        <Form addItem={addItem} />
        <Items items={items} />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_45;
