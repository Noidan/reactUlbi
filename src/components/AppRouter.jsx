import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from '../pages/Posts'
import About from '../pages/About'
import Error from '../pages/Error'
import Index from '../pages/Index'
import PostIdPage from '../pages/PostIdPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Index />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    )
}

export default AppRouter