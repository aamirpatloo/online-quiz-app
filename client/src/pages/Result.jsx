import { useLocation, Link } from "react-router-dom";

function Result() {
  const location = useLocation();
  const result = location.state;

  if (!result) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">
          No Result Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        Quiz Result
      </h1>

      <div className="space-y-4 text-xl">
        <p>
          <strong>Quiz:</strong> {result.quizTitle}
        </p>

        <p>
          <strong>Score:</strong> {result.score}
        </p>

        <p>
          <strong>Total Questions:</strong> {result.totalQuestions}
        </p>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Back To Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Result;