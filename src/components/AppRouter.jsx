import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from '../pages/Posts'
import About from '../pages/About'
import Error from '../pages/Error'
import Index from '../pages/Index'
import PostIdPage from '../pages/PostIdPage'
import { routes } from '../router'
import { publicRoutes, privateRoutes } from '../router'
import Login from '../pages/Login'
import { AuthContext } from '../context'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.element}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />)}
                <Route exact path="/" element={<Index />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.element}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />)}
                <Route exact path="/" element={<Login />} />
                <Route path="/*" element={<Error />} />
            </Routes>


    )
}

export default AppRouter