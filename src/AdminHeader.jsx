import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './pageCss/AdminHeader.css'

function AdminHeader() {

  return (
    <>
      <div className='mainAlign'>
        <h1>AdminHeaderPlaceholderText</h1>
        <img className='logo' src="https://www.svgrepo.com/show/469949/television.svg" alt="ShowFinder Logo" />
      </div>
    </>

  )
}

export default AdminHeader