import { useState } from "react"
import { questions } from "./Questoes"
import { Link } from "react-router-dom"

function Questoes() {
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [feedback, setFeedback] = useState({ correct: [], incorrect: [] })

    const handleAnswer = (questionIndex, option) => {
        setSelectedAnswers((prev) => {
            const updated = [...prev]
            updated[questionIndex] = option
            return updated
        })
    }

    const submit = (e) => {
        e.preventDefault()
        const correct = []
        const incorrect = []

        questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.answer) {
                correct.push(index)
            } else {
                incorrect.push(index)
            }
        })

        setFeedback({ correct, incorrect })
        setIsSubmitted(true)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-4">
            {!isSubmitted ? (
                <form onSubmit={submit} className="w-full max-w-4xl">
                    <h2 className="text-3xl mb-6 text-center">Questões</h2>
                    <div className="w-full max-h-[80vh] overflow-y-auto space-y-6 pr-2">
                        {questions.map((question, index) => (
                            <div key={index} className="p-6 bg-white rounded-xl shadow-md border border-blue-200">
                                <h3 className="text-xl mb-4 text-blue-900 font-semibold text-center">{question.question}</h3>
                                <ul className="space-y-3">
                                    {question.options.map((option, i) => (
                                        <li
                                            key={i}
                                            onClick={() => handleAnswer(index, option)}
                                            className={`cursor-pointer text-lg px-4 py-2 border rounded-xl transition-colors
                                                ${selectedAnswers[index] === option
                                                    ? "bg-blue-600 text-white border-blue-600"
                                                    : "bg-gray-100 hover:bg-blue-200 border-gray-300"
                                                }`}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-blue-700 text-white py-3 mt-6 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
                    >
                        Enviar Respostas
                    </button>
                </form>
            ) : (
                <div className="w-full max-w-4xl max-h-[80vh] overflow-y-auto space-y-6 pr-2">
                    <h2 className="text-3xl  mb-6 text-center">Questões Incorretas</h2>
                    {feedback.incorrect.length === 0 ? (
                        <p className="text-xl text-center text-green-600 bg-green-100 p-4 rounded-xl shadow-md">
                            🎉 Parabéns! Você acertou todas as questões.
                        </p>
                    ) : (
                        feedback.incorrect.map((index) => {
                            const question = questions[index]
                            return (
                                <div
                                    key={index}
                                    className="p-6 bg-white border-l-8 border-red-400 rounded-xl shadow-md"
                                >
                                    <h3 className="text-xl mb-3 font-semibold text-red-600">{index + 1}. {question.question}</h3>
                                    <ul className="space-y-2 mb-4">
                                        {question.options.map((option, i) => {
                                            const isCorrect = option === question.answer
                                            const isSelected = selectedAnswers[index] === option

                                            return (
                                                <li
                                                    key={i}
                                                    className={`text-lg px-4 py-2 border rounded-xl
                                                        ${isCorrect
                                                            ? "bg-green-500 text-white border-green-600"
                                                            : isSelected
                                                                ? "bg-red-500 text-white border-red-600"
                                                                : "bg-gray-100 border-gray-300"
                                                        }`}
                                                >
                                                    {option}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg text-yellow-800">
                                        <strong>💡 Explicação:</strong> {question.explanation}
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            )}
            {feedback.incorrect.length > 0 && (
                <Link
                    to="/"
                    className="w-2xl text-center bg-blue-600 text-white py-3 mt-6 rounded-xl font-semibold hover:bg-blue-800 transition duration-300"
                >
                    Voltar para o início
                </Link>
            )}
        </div>
    )
}

export default Questoes
