import './App.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Navmenu from './components/Navmenu.jsx'
import About from './components/About.jsx'
function App() {

  return (
    <>
      <div className="app">
          <img src="./src/assets/bg1.jpg"  className="logo react" alt="React logo" />
          <Navbar className="Nav" />
          <Main className="Main" />
          <About className="About" />

          {/* <Navmenu></Navmenu> */}
      </div>
    </>
  )
}

export default App
