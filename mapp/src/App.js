import React, {Component} from 'react';
import './App.css';
import MainPage from './components/mainPage';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
      return (
          <div>
              <div className="row">
                  <div className="col padding-0">
                      <MainPage />
                  </div>
              </div>

          </div >
      )
  }
}
export default App;

{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}