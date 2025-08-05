import './pageCss/Main.css'
import AdminHeader from './AdminHeader'
import ShowHeader from './ShowHeader'
import ShowDisplay from './ShowDisplay'



function Main() {

  return (
    <>
      <h3 className='header'>Welcome to the main page</h3>
      <div>
        <div className='mainPlacement'>
          <AdminHeader />
          <ShowHeader />
        </div>
        <div>
          <ShowDisplay className='displayPlacement'/>
        </div>
      </div>
    </>
  )
}

export default Main