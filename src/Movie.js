import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';


function Movie({title,poster,genres,synopsis}) {
    return(
        <div className="Movie">   
            <div className="Movie_Columns">
                <MoviePoster poster ={poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
               <h1>{title}</h1>
               <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
               </div>
               <p className="Movie_Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
               </p>    
            </div>
           
           
        </div>
    ); 
}

Movie.PropTypes = {
    title : PropTypes.string.isRequired, //필수
    poster : PropTypes.string.isRequired,  //props의 타입 지정
    genres : PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired
}


//state 없고 LifeCycle 없음
function MoviePoster({poster, alt}) { //return만 하기 위해 필요, 1개의 prop, 1개의 html문
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    );
}

MoviePoster.PropTypes = {
    poster : PropTypes.string
}


function MovieGenre({genre}) {
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

MovieGenre.PropTypes = {
    genre : PropTypes.string.isRequired
}

// class Movie extends Component {

//     static propTypes = { 
//         title : PropTypes.string.isRequired, //필수
//         poster : PropTypes.string  //props의 타입 지정
//     }

//     render() {
//         console.log(this.props);
//         return(
//             <div>   
//                 <h3>{this.props.title}</h3>
//                 <MoviePoster poster ={this.props.poster}/>
//             </div>
//         );
//     }
// }


// class MoviePoster extends Component {

//     static propTypes = { 
//         poster : PropTypes.string.isRequired  //props의 타입 지정
//     }

//     render() {
//         console.log(this.props);
//         return(
//            <img src={this.props.poster} alt="Movie Poster"/>
//         );
//     }
// }


export default Movie;