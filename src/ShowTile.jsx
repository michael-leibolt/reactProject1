import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './pageCss/ShowDisplay.css'


function ShowTile({ show }) {
  const [ open, setOpen ] = useState(false)
  const closeModal = () => setOpen(false)
  const net = show.show.network
  const checkerFunc = () => detailChecker(show)

  return (
    <>
      <div>
        <h1>{show.show.name}</h1>
        <h3>{show.airtime}</h3>
        <button type='button' className="button" onClick={()=> setOpen(o => !o)} >
          Learn More
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className='modal'>
            <a className="close" onClick={closeModal}>
              &times;
            </a>
            <div className='inText'>
              {checkerFunc()}
              {/* {`Showing in the ${show.show.network.country.code} today on ${show.network.name}`} */}
            </div>
          </div>
        </Popup>
      </div>
    </>
  )
}

export default ShowTile

function detailChecker(show) {
  //console.log('checkerFunc to detail checker')
  let output = ""

  let details = show.show

  if(details.name.length !== 0) {
    output += `Title: ${details.name} `
  } else {
    output += `Unknown Title`
  }

  if(show.rating.average !== true) {
    output += `Rating: ${show.rating.avarage}`
  } else {
    output += `Unknown Rating `
  }

  if(details.name.length !== 0) {
    output += `Title: ${details.name} `
  } else {
    output += `Unknown Title `
  }

  if(details.name.length !== 0) {
    output += `Title: ${details.name} `
  } else {
    output += `Unknown Title `
  }


  return (
    <>
      {`${output}`}
    </>
  )
}