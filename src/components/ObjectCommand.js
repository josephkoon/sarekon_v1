import React, { Component } from 'react';

class ObjectCommand extends Component {

  render() {

    return (

        <nav className="navbar navbar-default">

              <ul className="nav navbar-nav navbar-left">
                <li><a href="#"> <span className="caret"></span> Vehicle</a></li>
              </ul>
            
              <ul className="nav navbar-nav navbar-right">
                <li><a className='btn btn-default' href="#">Locate</a></li>
                <li><a className='btn btn-default' href="#">Quickfence</a></li>
                <li><a className='btn btn-default' href="#">Starter Enable</a></li>
                <li><a className='btn btn-default' href="#">Starter Disable</a></li>
                <li><a className='btn btn-default' href="#"><span className="caret"></span> More Commands</a></li>
              </ul>

        </nav>


    )

  }
}

export default ObjectCommand;