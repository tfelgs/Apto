import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useState, useEffect } from 'react'



function App() {
  


  return (
    <div>
        <div class="ui secondary pointing menu">
            <a class="active item">
                Home
            </a>
            <a class="item">
                Supplements Index
            </a>
            <a class="item">
                Products on the Market
            </a>
            <a class="item">
                About
            </a>
            <div class="right menu">
                <a class="ui item">
                    Profile
                </a>
            </div>
        </div>
        <div class="ui segment">
            <p></p>
        </div>
    </div>
  );
}

export default App;
