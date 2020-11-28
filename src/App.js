import logo from './logo.svg';
import './App.css';
import Container from './container.js';
import FacebookLogin from 'react-facebook-login';
import { FreeBreakfast } from '@material-ui/icons';


function callback(response) {
  alert("hi");
  console.log(response);
};

function App() {
/** 
        <FacebookLogin
      appId="3577937968959131"
      autoLoad={true}
      fields="name,email,picture"
      callback={callback} />,
*/

  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;

