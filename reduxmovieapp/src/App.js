import React from 'react';
import './App.css';
import TopRatingbar from './Components/TopRatingbar'
import NameFilter from './Components/NameFilter'
import MovieList from './Components/MovieList'


class App extends React.Component{

  render (){
    return (
        <div>
          <TopRatingbar />
          <NameFilter/>
          <MovieList/>
    
        </div>
      
    )
  }
}

export default App;
