import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Navigation';
import FbNews from './components/fbnews';

function App() {
  return (
    <div className="App">
      <div className='any'></div>
      <ResponsiveAppBar className="Appbar" />

      <FbNews className="MainDiv" />
    </div>
  );
}

export default App;
