import React, { Component } from 'react';
import './App.css';


//components
import Header from './components/Header'
import ObjectMap from './components/ObjectMap'
import ObjectSelector from './components/ObjectSelector'
import ObjectDetail from './components/ObjectDetail'
import ObjectCommand from './components/ObjectCommand'




class App extends Component {
  render() {
    return (
      <div>
  			<Header />

  			<div className='col-xs-3'>
  				<ObjectSelector />
  			</div>

        <div className='col-xs-9'>
          <ObjectMap />
          <ObjectCommand />
          <ObjectDetail />
        </div> 

      </div>
    );
  }
}

export default App;
