import React, { useEffect, useState, useMemo } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import { QuestionsType, QuestionType } from "./questions/question.type";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedAnswer, setQuestions, setTimeOut, setQuestionNumber, resetExcludedAnswers, setGameState } from "../store/slice/GameSlice";
import { RootState } from "../store/store";
import shuffleAndSelectQuestions from "../shared/shuffleAndSelectQuestions";
import amountList from "./amounts/AmountList";

interface AnswerListProps {
  data: QuestionsType
}

const AnswerList = ({ data }: AnswerListProps) => {
  const dispatch = useDispatch();
  const { earned, selectedAnswer, question, questionNumber, excludedAnswers } = useSelector((state: RootState) => state.game);
  const { people } = useSelector((state: RootState) => state.people);

  const [selectedQuestions, setSelectedQuestions] = useState<QuestionsType>([]);
  const [className, setClassName] = useState("answer");

  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    if (data.length > 0) {
      const { initialQuestions } = shuffleAndSelectQuestions(data, amountList.length);
      setSelectedQuestions(initialQuestions);
      dispatch(setQuestions(initialQuestions));
      dispatch(setGameState({ name: "question", value: initialQuestions[questionNumber - 1] }));
    }
  }, [data, dispatch, questionNumber]);

  useEffect(() => {
    if (selectedQuestions.length > 0) {
      dispatch(setGameState({ name: "question", value: selectedQuestions[questionNumber - 1] }));
    }
  }, [selectedQuestions, questionNumber]);

  const handleClick = (answer: QuestionType["answers"][0]) => {
    dispatch(setSelectedAnswer(answer.text));
    setClassName("answer active");

    const timeoutId = setTimeout(() => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    }, 3000);

    if (!answer.correct) {
      const correctAnswerObj = question?.answers.find(ans => ans.correct);
      const wrongTimeoutId = setTimeout(() => {
        if (correctAnswerObj) {
          setClassName("answer correct");
        }
        wrongAnswer();
        const finalTimeoutId = setTimeout(() => {
          dispatch(setTimeOut(true));
        }, 1000);
        return () => clearTimeout(finalTimeoutId);
      }, 5000);
      return () => clearTimeout(wrongTimeoutId);
    } else {
      const correctTimeoutId = setTimeout(() => {
        correctAnswer();
        const nextTimeoutId = setTimeout(() => {
          dispatch(setQuestionNumber(questionNumber + 1));
          dispatch(setSelectedAnswer(null));
          dispatch(resetExcludedAnswers());

          if (questionNumber < selectedQuestions.length) {
            dispatch(setGameState({ name: "question", value: selectedQuestions[questionNumber] }));
          } else {
            console.log("Quiz completed!"); // Handle quiz completion
          }
        }, 1000);
        return () => clearTimeout(nextTimeoutId);
      }, 5000);
      return () => clearTimeout(correctTimeoutId);
    }

    return () => clearTimeout(timeoutId);
  };

  const excludedAnswerTexts = useMemo(() => excludedAnswers.map((excludedAnswer) => excludedAnswer.text), [excludedAnswers]);

  return (
    <div className="trivia">
      {/* <img src={people.player} className="player" alt="Player"/> */}
      <div className="question">{question?.question}</div>
      <div className="answers">
        {Object.keys(question).length && question?.answers.map((answer, index) => (
          <div
            key={index}
            className={selectedAnswer === answer.text ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(answer)}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="rotate" style={{ marginRight: '20px' }}></div>
              {answer.option}.
              <span style={{ marginLeft: "10px" }}>
                {excludedAnswerTexts.length ? excludedAnswerTexts.includes(answer.text) ? answer.text : null : answer.text}
              </span>
            </div>
            <div className="rotate" style={{ marginRight: '20px' }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerList