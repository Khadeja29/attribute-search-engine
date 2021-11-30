
import CheckBoxDisplay from './components/checkBoxDisplay.js';
import NavBar from './components/navBar/navBar.js';
import SearchBar from './components/searchBar.js';
import './App.css';

function App() {
  return (
    
    <div className="container">
      
      {/* define a basic structure here first and then call components. */}
      <NavBar/>
      <SearchBar/>
      <CheckBoxDisplay/>


    </div>
  );
}

export default App;

