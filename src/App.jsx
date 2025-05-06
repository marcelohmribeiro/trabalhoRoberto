import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./Inicio"
import Questoes from "./Questoes"

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/questoes" element={<Questoes />} />
      </Routes>
    </Router>
  )
}

export default App