// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="demo">
      <h1>This my First React App</h1>
      <Greetings/>
    </div>
  );
}

function Greetings() {
  return (
    <div className="demo">
      <h2>Welcome</h2>
      <div>
        <h3>Everyone</h3>
      </div>
    </div>
  );
}

export default App;
