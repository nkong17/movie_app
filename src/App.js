import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';



class App extends Component {
 

state = {}

 componentDidMount() {
  this._getMovies();

}

//함수
_renderMovies = () => {
  const movies = this.state.movies.map((movie) => {
    return <Movie 
    title={movie.title_english} 
    poster={movie.medium_cover_image} 
    key={movie.id} 
    genres={movie.genres}
    synopsis={movie.synopsis}
    />
  })
  return movies
}

 _getMovies = async () => {
  const movies = await this._callApi() //callApi가 끝나기를 기다린다, 결과를 movies 변수에 넣어서
  this.setState({  //state에 Set 해준다. callApi 호출이 끝나면.(성공여부X)
    movies
  })
}

_callApi = () => {
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
  .then(response => response.json()) // 성공여부에 관계 없이 위 일을 완료하면 실행
  .then(json => json.data.movies)//=> 는 return 작성할 필요 없음  return json.data.movies
  .catch(err => console.log(err)) //하지만 에러가 생기면 알려줌
 
}



//영화 목록 있으면 표시, 없으면 Loading 표시
  render() {
    const { movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading..'} 
      </div>
    );
  }
}

export default App;
