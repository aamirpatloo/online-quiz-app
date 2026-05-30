import { Link } from "react-router-dom";

function Quizcard({ quiz }) {

  return (

    <div className="bg-white shadow-lg rounded-lg p-6">

      <h2 className="text-2xl font-bold mb-2">

        {quiz.title}

      </h2>

      <p className="text-gray-600 mb-4">

        {quiz.description}

      </p>

      <Link
        to={`/quiz/${quiz._id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >

        Start Quiz

      </Link>

    </div>
  );
}

export default Quizcard;