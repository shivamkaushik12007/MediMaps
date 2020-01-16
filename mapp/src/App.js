import React, {Component} from 'react';
import './css/App.css';
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
