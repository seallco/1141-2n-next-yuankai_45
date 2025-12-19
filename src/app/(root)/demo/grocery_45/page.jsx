'use client';

import { useState, useEffect } from 'react';
import {nanoid} from 'nanoid';
import { ToastContainer, Toast, toast } from 'react-toastify';

import Form from './_components/Form_45';
import Items from './_components/Items_45';

import Wrapper from '../_assets/wrapper/Grocery_45';

const GroceryPage_45 = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id:nanoid (),
  };
    setItems([...items, newItem]);
    toast.success('Item added successfully!');
  };

  return (
    <Wrapper>
      <section className='section-center'>
        <ToastContainer position='top-center'/>
        <Form addItem={addItem} />
        <Items items={items} />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_45;
