// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import {ReactPlayerContainer} from './styledComponents'

const MovieItem = props => {
  const {movieDetail} = props
  const {thumbnailUrl, videoUrl} = movieDetail

  return (
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
        </button>
      }
    >
      {close => (
        <ReactPlayerContainer>
          <button
            type="button"
            testid="closeButton"
            className="trigger-button"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
          <ReactPlayer url={videoUrl} controls width={450} />
        </ReactPlayerContainer>
      )}
    </Popup>
  )
}

export default MovieItem
