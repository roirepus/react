import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Menu} from "/home/charm/react/router-dom/src/pages/Menu"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1>error</h1>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
