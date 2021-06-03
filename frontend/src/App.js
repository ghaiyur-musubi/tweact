import logo from './logo.svg';
import './App.css';
import useState from 'react';
import axios from 'axios';

function App() {
  const [tweets ,setTweets] = useState('')
  axios.get('')
  return (
    <div className="App">
      <h1> T W E A C T </h1>
      <ul>

      </ul>
    </div>
  );
}

export default App;
