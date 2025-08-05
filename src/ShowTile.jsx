import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ShowTile({ show }) {

  return (
    <>
      <div>
        <h1>{show.show.name}</h1>
        <h3>{show.airtime}</h3>
        <Link><button></button></Link>
      </div>
    </>
  )
}

export default ShowTile