import './pageCss/Main.css'
import AdminHeader from './AdminHeader'
import ShowHeader from './ShowHeader'
import ShowDisplay from './ShowDisplay'
import { useState } from 'react'



function Main() {
let [shows, setShows] = useState([])

  return (
    <>
      <h3 className='header'>Welcome to the main page</h3>
      <div>
        <div className='mainPlacement'>
          <AdminHeader />
          <ShowHeader />
        </div>
        <div>
          <ShowDisplay className='displayPlacement' setShows={setShows} shows={shows}/>
        </div>
      </div>
    </>
  )
}

export default Main