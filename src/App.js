import "./App.css"
import AboutUs from "./pages/AboutUs"
import GlobalStyle from "./components/GlobalStyle"
import Nav from "./components/Nav"

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  )
}

export default App
