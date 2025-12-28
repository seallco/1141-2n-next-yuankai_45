'use client'

import Wrapper from '../../../_assets/wrapper/Blog2_45';
import Blog2_45 from './Blog2_45';

import {BlogContextProvider_45, useBlogContext_45} from '../_blogContext_45'

const BlogList2_45 = () => {
    const {blogs_45, } = useBlogContext_45();
return (
<Wrapper>
    <div className="blogs-center">
      {blogs_45?.map((item) => {
        const {id, title, descrip, category, img} = item ;
        return (
        <Blog2_45 
        key={id} 
        id={id} 
        title ={title} 
        descrip={descrip} 
        category={category} 
        img={img} 
        />
        )
      })}
      </div>
</Wrapper>
)
}

export default BlogList2_45