import './App.css';
import About from './Components/About';
import AllnOne from './Components/AllnOne';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import Support from './Components/Support';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Support/>
      <AllnOne/>
    </div>
  );
}

export default App;
