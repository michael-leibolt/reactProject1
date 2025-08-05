import './App.css'
import { Route, Routes } from 'react-router-dom'
import Error from './Error'
import HomeSplash from './HomeSplash'
import Main from './Main'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeSplash />} />
        <Route path='/*' element={<Error />} />
        <Route path='/home' element={<Main /> } />
      </Routes>
    </>
  )
}

export default App
