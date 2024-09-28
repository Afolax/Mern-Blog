import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import PostCreate from './pages/PostCreate'
import PostUpdate from './pages/PostUpdate'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop'
import Search from './pages/Search'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/sign-in' element={ <Signin /> }/>
        <Route path='/sign-up' element={ <SignUp /> }/>
        <Route path='/search' element={ <Search /> }/>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={ <Dashboard /> }/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={ <PostCreate /> }/>
          <Route path='/update-post/:postId' element={ <PostUpdate /> }/>
        </Route>
        <Route path='/projects' element={ <Projects /> }/>
        <Route path='/post/:postSlug' element={ <PostPage /> }/>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
