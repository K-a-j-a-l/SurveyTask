import React, { useState, useEffect } from 'react';
import Survey from './Components/Survey';
import WelcomeScreen from './Components/WelcomeScreen';
import ThankyouScreen from './Components/ThankyouScreen';

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState({});
    const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
    const [showThankYouScreen, setShowThankYouScreen] = useState(false);
    const [selectedRating, setSelectedRating] = useState(false);
    const [showThankYouDelayed, setShowThankYouDelayed] = useState(false);

    const questions = [
        { id: 1, text: 'How satisfied are you with our products?', type: 'rating', max: 5 },
        { id: 2, text: 'How fair are the prices compared to similar retailers?', type: 'rating', max: 5 },
        { id: 3, text: 'How satisfied are you with the value for money of your purchase?', type: 'rating', max: 5 },
        { id: 4, text: 'On a scale of 1-10 how would you recommend us to your friends and family?', type: 'rating', max: 10 },
        { id: 5, text: 'What could we do to improve our service?', type: 'text' },
    ];

    const handleAnswer = (questionId, answer) => {
        setSelectedRating(true)
        setAnswers({...answers, [questionId]: answer });
    };
    const allQuestionsAnswered = () => {
        return Object.keys(answers).length === questions.length;
    };

    const handleNext = () => {
        if (currentQuestion < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedRating(false);
        } else {
            if (allQuestionsAnswered()) {
                setShowThankYouDelayed(true);
            } else {
                alert("Please answer all questions before submitting.");
            }
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedRating(false);
        }
    };

    const handleStartSurvey = () => {
        setShowWelcomeScreen(false);
    };

    const handleConfirmation = () => {
        localStorage.setItem('surveyAnswers', JSON.stringify(answers));
        localStorage.setItem('surveyStatus', 'COMPLETED');
        setShowThankYouDelayed(false);
        setCurrentQuestion(1);
        setShowWelcomeScreen(true);
        setSelectedRating(false);
    };

    useEffect(() => {
        let timer;
        if (showThankYouDelayed) {
            timer = setTimeout(() => {
                setShowThankYouScreen(true);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showThankYouDelayed]);

    return ( <
            div > {
                showWelcomeScreen && < WelcomeScreen onStart = { handleStartSurvey }
                />} {
                    showThankYouScreen && < ThankyouScreen onConfirm = { handleConfirmation }
                    />} {
                        !showWelcomeScreen && !showThankYouScreen && ( <
                            Survey question = { questions[currentQuestion - 1] }
                            onAnswer = { handleAnswer }
                            onNext = { handleNext }
                            onPrev = { handlePrev }
                            totalQuestions = { questions.length }
                            currentQuestion = { currentQuestion }
                            selectedRating = { selectedRating }
                            />
                        )
                    } <
                    /div>
                );
            }

            export default App;