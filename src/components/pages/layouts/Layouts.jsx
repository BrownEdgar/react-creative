import React from 'react'
import Navbar from '../../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../footer/Footer'

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
