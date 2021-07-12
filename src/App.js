import logo from './logo.svg';
import './App.css';
import Input from './component/input';
import Temperature from './container/temperature';


function App() {
  return (
    <div className="container">
      <div className="col-md-4 offset-md-4 mt-5 text-center">
        <h2>Temperature converter</h2>
        <Temperature />
      </div>
    </div>

  );
}

export default App;
