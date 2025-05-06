import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./Inicio"
import Perguntas from "./Questoes"

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/questoes" element={<Perguntas />} />
      </Routes>
    </Router>
  )
}

export default App