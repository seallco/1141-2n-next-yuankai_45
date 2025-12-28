'use client'

import {useState, createContext, useContext} from 'react';

import blogData_45 from '../../_assets/data/blogData.json';
const BlogContext = createContext();

export const BlogContextProvider_45 = ({children}) => { 
    const [name, setName] = useState('周淵凱');
    const [id, setId] = useState('213410045');
    const [blogs_45, setBlogs_45] = useState(blogData_45);
    const [alert, setAlert] =useState({
      show:false,
      msg:'',
      type:'',
    })

    const showAlert = (show = false, msg = '', type='') => {
      setAlert({show, msg, type})
    }

    const removeItem= (id) => {
      showAlert(true, 'blog removed', 'danger')
      setBlogs_45(blogs_45.filter((blog) => blog.id !==id));
    };

    const clearAllBlogs = () => {
      showAlert(true, 'all blogs cleared', 'danger')
      setBlogs_45([]);
    }

    const loadAllBlogs =() =>{
      showAlert(true, 'load all blogs', 'success')
      setBlogs_45(blogData_45)
    }

    return(
    <BlogContext.Provider 
    value={{
        blogs_45,
        name,
        id,
        alert,
        showAlert,
        removeItem,
        clearAllBlogs,
        loadAllBlogs
    }}
    >
        {children}
        </BlogContext.Provider>
        )
}

export const useBlogContext_45 =()=> {
    return useContext(BlogContext);
}
