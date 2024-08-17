import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import axios from 'axios'



function App() {
  const [value, setValue] = useState("")
  async function formSubmit(e){
    e.preventDefault()
    const {data} = await axios.get(
      'https://reactfunction.azurewebsites.net/api/HttpTrigger1?code=Ay1fgDMvuAVzItwXw3YCrOeRKgRf70VKnD5WOV4TKnbqAzFuFwmsnQ%3D%3D', {
        params: {
          
          name: value
        }
      }
    );
    alert(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={formSubmit}>
        <input type="text"  value={value} onChange={(e) => setValue(e.target.value)} placeholder='Name' />
        <button>Submit</button>
        </form>
        <p>{value}</p>
      </header>
    </div>
  );
}

export default App;
