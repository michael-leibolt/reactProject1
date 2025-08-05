import './pageCss/Error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <h1 className='header'>Content does not exist or is loading. Please try again soon!</h1>
      <Link to='/home'><button>Go To Home Page </button></Link>
    </>
  )
}

export default Error