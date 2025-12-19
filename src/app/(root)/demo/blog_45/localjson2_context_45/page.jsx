'use client'

import{ useState} from 'react';

import {BlogContextProvider_45, useBlogContext_45} from './_blogContext_45'
import Wrapper from '../../_assets/wrapper/Blog2_45';
import Alert_45 from '../../_components/Alert_45';



import BlogList2_45 from './_components/BlogList2_45';

const BlogLocalJsonPage2_45 = () => {  
  return(
    <BlogContextProvider_45>
    <Content_45 />
    </BlogContextProvider_45>
    )
}

const Content_45 = () => {
  const {
    name,
    id,
    alert,
    showAlert,
    clearAllBlogs, 
    loadAllBlogs,
  } = useBlogContext_45();

  return (
  <Wrapper>
    {alert.show && <Alert_45 alert={alert} showAlert={showAlert}/>}
      <section className="blogs">
      <div className="section-title">
        <h2>
          blogs context from local json2 -- { name }, {id}
          </h2>
      </div>
      <BlogList2_45 />
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
