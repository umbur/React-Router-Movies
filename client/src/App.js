import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route} from "react-router-dom";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }



  render() {
    return (
      <div>
        <Route exact path ="/" component={MovieList}/>
        <Route path="/movies/:id" component={Movie}/>
        <SavedList list={this.state.savedList} />
      </div>
    );
  }
}