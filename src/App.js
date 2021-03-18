import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from './containers/RegistrationPage/RegistrationPage';

class App extends Component {
  render()
  {
    return (
      <div>
          <RegistrationPage/>
      </div>
    );
  }
  
}

export default App;
