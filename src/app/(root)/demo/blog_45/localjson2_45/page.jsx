'use client'

import{ useState} from 'react';

import blogData_45 from '../../_assets/data/blogData.json';
import Blog2_45 from '../localjson2_context_45/_components/Blog2_45';
import Wrapper from '../../_assets/wrapper/Blog2_45';
import Alert_45 from '../../_components/Alert_45';

const BlogLocalJsonPage2_45 = () => {
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
    <Wrapper>
    {alert.show && <Alert_45 alert={alert} showAlert={showAlert}/>}
      <section className="blogs">
      <div className="section-title">
        <h2>blogs from local json2 -- { name }, {id}</h2>
      </div>
      <div className="blogs-center">
      {blogs_45.map((blog_45) => {
        const {id, title, descrip, category, img} = blog_45;
        return (
        <Blog2_45 
        key={id} 
        id={id} 
        title ={title} 
        descrip={descrip} 
        category={category} 
        img={img} 
        removeItem={removeItem}
        />
        )
      })}
      </div>



      <div className='flex justify-center items-center gap-8 mt-8' >
        <button 
        type='button' 
        className='text-red-700 bg-red-200 capitalize hover:bg-red-300 px-4 py-2 text-base rounded'
        onClick={clearAllBlogs}
        >
          clear all blogs
          </button>
        <button 
        type='button' 
        className='text-blue-700 bg-blue-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
        onClick={loadAllBlogs}
        >
          load all blogs
          </button>
      </div>
    </section>
    </Wrapper> 
    )
}

export default BlogLocalJsonPage2_45
