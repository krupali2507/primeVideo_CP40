// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <Slider {...settings} color="#ffffff">
      {moviesList.map(eachMovie => (
        <MovieItem key={eachMovie.id} movieDetail={eachMovie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
