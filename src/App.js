import React, { useMemo, useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description 1' },
    { id: 2, title: 'React', body: 'Description 2' },
    { id: 3, title: 'Redux', body: 'Description 3' },
    { id: 4, title: 'NodeJS', body: 'Description 4' },
    { id: 5, title: 'TypeScript', body: 'Description 5' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return <div className="App">
    <MyButton style={{marginTop:30}}onClick={() => setModal(true)}>
      Создать пользователя
    </MyButton>
    <MyModal visible={modal} setVisible={setModal} myModalName='New post'>
      <PostForm create={createPost} />
    </MyModal>

    <hr style={{ margin: '15px 0' }} />
    <PostFilter filter={filter} setFilter={setFilter} />
    <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Post list' />
  </div>
}

export default App;