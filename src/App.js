import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Navigation';
import FbNews from './components/fbnews';
import LSNav from './components/left-side';
import RSnav from './components/right-side';

function App() {
  return (
    <div className="App">
      <div className='any'></div>
      <ResponsiveAppBar className="Appbar" />

      <div className='Body'>
      <LSNav />
      <FbNews className="MainDiv" />
      <RSnav/>
      </div>
    </div>
  );
}

export default App;
