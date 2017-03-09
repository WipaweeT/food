import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

       return (
        <div className="collapse navbar-collapse topMenu" id="bs-example-navbar-collapse-1">
          <div className="Red">
            <h1 className="text">SEARCHING FOR FOOD</h1>
          </div>
          <div className="bgBlack">
            <ul className="nav navbar-nav">
                <li >
                    <a href="index.html" className="padding">หน้าหลัก</a>
                </li>
                <li>
                    <a href="about.html" className="padding">สาระน่ารู้</a>
                </li>
                <li>
                    <a href="contact.html" className="padding">ติดต่อเรา</a>
                </li>
            </ul>
          </div>
          <div className="margin2"></div>
          <div className="margin bg"></div>
          <input id="search-input" className="form-control input-lg" placeholder="Search icons" autocomplete="off" spellcheck="false" autocorrect="off" tabindex="1"></input>
          <a id="search-clear" href="#" class="fa fa-times-circle hide" aria-hidden="true"><span class="sr-only">Clear search</span></a>
        </div>

    
    );
  }
}

export default App;
