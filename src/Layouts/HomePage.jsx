import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <Header/>
        <Outlet  /> {/* This renders the nested route component */}
    </div>
  )
}
