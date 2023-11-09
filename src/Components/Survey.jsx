import React, { useState } from "react";
import styled from "styled-components";

export default function Survey({
    question,
    onAnswer,
    onNext,
    onPrev,
    totalQuestions,
    currentQuestion,
    selectedRating
}) {
    const [clickedRating, setClickedRating] = useState(0);

    const handleAnswer = (rating) => {
        setClickedRating(rating);
        onAnswer(question.id, rating);
    };

    const renderIcons = (max) => {
        const icons = [];
        for (let i = 1; i <= max; i++) {
            icons.push( <
                StyledSpan key = { i }
                onClick = {
                    () => handleAnswer(i) }
                selected = { clickedRating === i && selectedRating } >
                { i } < /StyledSpan>
            );
        }
        return icons;
    };

    return ( <
        Container >
        <
        div >
        <
        h4 className = "heading" > Customer Survey < /h4> <
        p className = "quesNo" > { currentQuestion }
        /{totalQuestions} <
        /p> <
        h4 className = "ques" > { question.id }. { question.text } < /h4> <
        div className = "icons" > {
            question.type === "rating" ? (
                renderIcons(question.max)
            ) : ( <
                textarea className = "textBox"
                onChange = {
                    (e) => handleAnswer(e.target.value) }
                />
            )
        } <
        /div> <
        /div> <
        ButtonWrapper >
        <
        Button onClick = { onPrev } > Previous < /Button> <
        Button onClick = { onNext } > Next < /Button> <
        /ButtonWrapper> <
        /Container>
    );
};

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size:1.2rem;
  justify-content:center;
  .heading {
    font-size: 2.5rem;
    position:fixed;
    top:5%;
    left:35%;
  }
  .quesNo {
    position:fixed;
    top:25%;
    right:20%;
  }
  .ques {
    margin-top: 200px;
  }
  .icons {
    margin: 50px 0;
    width: 100%;
    display: flex;
  }
  .textBox {
    width: 100%;
    height: 70px;
    padding: 10px;
    font-size: 18px;
    resize: none;
    background-color: white;
  }
  .textBox:focus {
    border: 1px solid black;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  @media (max-width: 768px) {
    .heading {
      font-size: 2rem;
      text-align:center;
      left:20%;
    }
    .quesNo {
      top: 12%;
      right: 20%;
      font-size: 1rem;
    }
    .ques {
      margin:120px 50px;
      font-size: 1rem;
    }
    .icons {
      margin: 10px 30px;
      display:inline-block;
    }
    .textBox {
      width:80%;
      height: 50px;
      font-size: 16px;
    }
  }
`;

const StyledSpan = styled.span `
  cursor: pointer;
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.selected ? "yellow" : "white")};
  margin: 10px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 32px;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    width:7.5px;
    height:7.5px;
    padding:25px;
    font-size:1rem;
    margin:8px;
  }
`;

const ButtonWrapper = styled.div `
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  bottom:22%;
  @media (max-width: 768px) {
    bottom: 20%;
  }
`;

const Button = styled.button `
  border: 1px solid blue;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 50px;
  background-color: #040FF9;
  width: 7.2rem;
  height: 3rem;
  color: white;
  &:hover {
    border: 1px solid blue;
    background-color: #07248C;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;