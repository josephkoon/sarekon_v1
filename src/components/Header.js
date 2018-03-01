import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">SAREKON</a>
            </div>

            <div id="navbar" className="navbar-collapse collapse">

              <ul className="nav navbar-nav navbar-left">
                <li className="active"><a href="#">Vehicles</a></li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Settings</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Profile</a></li>
                  </ul>
                </li>
              </ul>

            </div>
            
        </nav>
      </div>
    );
  }
}

export default Header;
