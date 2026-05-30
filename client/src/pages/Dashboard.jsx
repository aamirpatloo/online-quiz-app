import { useEffect, useState } from "react";

import API from "../services/api";

import QuizCard from "../components/Quizcard";

function Dashboard() {

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {

  const fetchQuizzes = async () => {

    try {

      const response = await API.get("/quizzes");

      console.log(response.data);

      setQuizzes(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  fetchQuizzes();

}, []);



  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-center mb-8">

        Dashboard

      </h1>



      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {quizzes.length > 0 ? (

          quizzes.map((quiz) => (

            <QuizCard
              key={quiz._id}
              quiz={quiz}
            />

          ))

        ) : (

          <p>No quizzes found</p>

        )}

      </div>

    </div>
  );
}

export default Dashboard;