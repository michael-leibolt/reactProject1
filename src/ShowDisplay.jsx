import {useState, useEffect } from 'react'
import ShowTile from './ShowTile'
import './pageCss/ShowDisplay.css'



function ShowDisplay({ setShows, shows, setPicked}) {

  useEffect(()=> {
    fetch('https://api.tvmaze.com/schedule')
      .then(res => res.json())
      .then(fet => setShows(fet))
  }, [])


  return (
    <>
      <h1>ShowDisplay PlaceHolder</h1>
      <img
        src='https://i.ytimg.com/vi/2C7a83livO0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGDQgTSh_MA8=&rs=AOn4CLCDy5ISo8HSYKVwkqbOJTYiFafSig'
        alt='Display Placeholder'
      />
      <div className='tile'>
        {shows.map(show => <ShowTile  show={show} key={show.id} setPicked={setPicked}/>)}
      </div>
    </>

  )
}

export default ShowDisplay