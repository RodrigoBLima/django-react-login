import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default class TopMenu extends Component {
  
  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    return (
      <div className="header">
        <div className="navbar">
          <div className="">
        
            <ul>
              <li>
                <a onClick={this.handleLogout}>Sair</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
}
