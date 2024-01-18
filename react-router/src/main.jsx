import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'


{/*
1. we created the router -> we used the createBroswerRouter 
   -> Why did we do this? -> so that we could create the route for the pages 
2. we used createRoutesFromElements to use the route tags 
   -> What the routes take a path (what does in the address bar) and an element (what component we want to show on that location)
3. The routeProvidor lets us put our router in the react dom (like a service provider)
4. 
*/}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
