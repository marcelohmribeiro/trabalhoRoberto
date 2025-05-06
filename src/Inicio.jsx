import { Link } from "react-router-dom"

function Inicio() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl hover:text-7xl transition-all">Olá</h1>
      <iframe
        className="mt-4 border-2 rounded-lg"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/O-YzJEd3xQ4?si=p9fEoGTQvzKDUalG"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
        <Link to="/questoes" className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-all">
          Ir para questões
        </Link>
    </div>
  )
}

export default Inicio