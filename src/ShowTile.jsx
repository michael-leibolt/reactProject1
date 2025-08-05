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
  let details = show.show;
  console.log(details.network.country.name);

  const output =
    (details.name !== true ? `Title: ${details.name}. `
      : `Unknown Title `) +
    (details.language !== true ? `Language: ${details.language}. `
      : `Unknown Language `) +
    (details.network.country.name !== true ? `Country: ${details.network.country.name}. `
      : `Unknown Country `);

  return (
    <>
      {output}
    </>
  );
}