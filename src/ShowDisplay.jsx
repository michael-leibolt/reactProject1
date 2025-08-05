import {useState, useEffect } from 'react'



function ShowDisplay() {
  let [shows, setShows] = useState([])

  useEffect(()=> {
    fetch()
  }, [])


  return (
    <>
      <h1>ShowDisplay PlaceHolder</h1>
      <img
        src='https://i.ytimg.com/vi/2C7a83livO0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGDQgTSh_MA8=&rs=AOn4CLCDy5ISo8HSYKVwkqbOJTYiFafSig'
        alt='Display Placeholder'
      />
    </>

  )
}

export default ShowDisplay