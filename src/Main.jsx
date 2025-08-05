import './pageCss/Main.css'
import AdminHeader from './AdminHeader'
import ShowHeader from './ShowHeader'
import ShowDisplay from './ShowDisplay'
import { useState } from 'react'



function Main() {
let [shows, setShows] = useState([])
let [picked, setPicked] =useState([])

  return (
    <>
      <h3 className='header'>Welcome to the main page</h3>
      <div>
        <div className='mainPlacement'>
          <AdminHeader />
          <ShowHeader picked={picked}/>
        </div>
        <div>
          <ShowDisplay
          className='displayPlacement'
          setShows={setShows}
          shows={shows}
          setPicked={setPicked}
        />
        </div>
      </div>
    </>
  )
}

export default Main