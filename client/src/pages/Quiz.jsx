import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await API.get(`/questions/${id}`);

        console.log("Questions:", response.data);

        setQuestions(response.data);
      } catch (error) {
        console.log("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [id]);

  const handleOptionSelect = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmitQuiz = async () => {
    if (Object.keys(answers).length === 0) {
      alert("Please answer at least one question");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      console.log("TOKEN:", token);

      const response = await API.post(
        "/results/submit",
        {
          quizId: id,
          answers,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Result:", response.data);

      navigate("/result", {
        state: response.data,
      });
    } catch (error) {
      console.log("Submit Error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to submit quiz"
      );
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10 text-xl">
        Loading Questions...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Quiz
      </h1>

      {questions.length === 0 ? (
        <p className="text-center text-gray-500">
          No questions found
        </p>
      ) : (
        <>
          {questions.map((question, index) => (
            <div
              key={question._id}
              className="bg-white shadow-lg rounded-lg p-6 mb-6"
            >
              <h2 className="text-xl font-bold mb-4">
                {index + 1}. {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      handleOptionSelect(
                        question._id,
                        option
                      )
                    }
                    className={`w-full text-left border p-3 rounded transition ${
                      answers[question._id] === option
                        ? "bg-blue-600 text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button
              onClick={handleSubmitQuiz}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Submit Quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;