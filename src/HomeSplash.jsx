import './App.css'
import { Link } from 'react-router-dom'

function HomeSplash() {

  return (
    <>
      <h1>HomePage</h1>
      <Link to='/home'><button>See some shows</button></Link>
    </>
  )
}

export default HomeSplash