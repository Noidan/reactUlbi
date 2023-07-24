import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description 1' },
    { id: 2, title: 'React', body: 'Description 2' },
    { id: 3, title: 'Redux', body: 'Description 3' },
    { id: 4, title: 'NodeJS', body: 'Description 4' },
    { id: 5, title: 'TypeScript', body: 'Description 5' }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return <div className="App">
    <PostForm create={createPost} />
    <PostList posts={posts} title='Список постов' />
  </div>
}

export default App;
