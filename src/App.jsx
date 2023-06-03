import React from 'react'
import Layouts from './components/pages/layouts/Layouts';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import ROUTES from './components/routes/ROUTES';
import Blog from './components/pages/blog/Blog';
import Contact from './components/pages/contact/Contact';
import Works from './components/pages/works/Works';

import './App.css';

export default function App () {
  return (
    <div className = 'App'>
      <Routes>
				<Route  element = {<Layouts />}>	
          <Route path = '/' element={<Home />}/>
					<Route path={ROUTES.WORKS} element={<Works />}/>
					<Route path={ROUTES.BLOG} element={<Blog />}/>
					<Route path={ROUTES.CONTACT} element={<Contact />}/>
				</Route>
			</Routes>

    </div>
  )
}
