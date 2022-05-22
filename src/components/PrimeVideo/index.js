// Write your code here
import MoviesSlider from '../MoviesSlider'
import {
  PrimeVideoContainer,
  PrimeVideoLogo,
  MovieCategoryHeader,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <PrimeVideoContainer>
      <PrimeVideoLogo
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MovieCategoryHeader>Action Movies</MovieCategoryHeader>
      <MoviesSlider moviesList={actionMoviesList} />
      <MovieCategoryHeader>Comedy Movies</MovieCategoryHeader>
      <MoviesSlider moviesList={comedyMoviesList} />
    </PrimeVideoContainer>
  )
}

export default PrimeVideo
