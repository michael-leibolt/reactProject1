import './pageCss/ShowHeader.css'


function ShowHeader({ picked }) {

  return (
    <>
      <div className="mainAlign">
        <h1>ShowHeaderPlaceHolder</h1>
        <img
          src={null}
          alt = 'testImage'
        />
        <h2>{picked.summary}</h2>
      </div>
    </>
  )

}

export default ShowHeader