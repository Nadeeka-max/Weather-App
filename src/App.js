import React, {useState, useEffect} from 'react';

import './App.css';
import WeatherEngine from './components/WeatherEngine';
import MyDetails from './components/MyDetails';

function App() {
  
 
  return (
    <div className="App">
      <div>
        <table>
          <tr>
              <td> <WeatherEngine location = "Sydney,au" /></td>
              <td> <WeatherEngine location = "Melton,au"/></td>
              <td> <WeatherEngine location = "Melton,au"/></td>
              
          </tr>
          <tr>
              <td><WeatherEngine location = "Melton,au"/></td>
              <td><WeatherEngine location = "Sydney,au" /></td>
              <td> <WeatherEngine location = "Melton,au"/></td>
          </tr>
         </table>
         </div>
         <div><MyDetails/></div>
    </div>
  );
}

export default App;
