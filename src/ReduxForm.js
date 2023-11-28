import Navbar2 from "./Navbar/Navbar2";
import AddPostForm from "./posts/AddPostForm";
import PostsList from "./posts/Postlist";
import React from 'react'

function ReduxForm() {
  return (
    <div style={{backgroundColor:"rgba(.0 , .0 , .0 , .1)"}}>
        <Navbar2/>
        <AddPostForm/>
        <PostsList/>
    </div>
  )
}

export default ReduxForm