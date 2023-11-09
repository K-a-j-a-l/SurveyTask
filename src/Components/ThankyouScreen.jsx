import React from 'react'
import styled from 'styled-components'

export default function ThankyouScreen({onConfirm}) {
  return (
    <Container>
    <div>   
        <h2 className="heading">Thank You For taking the Survey!</h2>
      <button className="btn" onClick={onConfirm}>Confirm Submission</button>
    </div>
    </Container>
  );
}
const Container=styled.div`
        display: flex;
    justify-content: center;
    width:100%;
    .heading{
        font-size:2.5rem;
        margin:300px 40px 40px 40px;
    }
    
    .btn{
        font-size:1.5rem;
        cursor:pointer;
        margin-left:110px;
        background-color:#040FF9;
        width:15.6rem;
        height:4.5rem;
        color:white;
    }
    .btn:hover{
        background-color:#07248C;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    @media only screen and (max-width: 768px) {
    .heading {
      font-size: 2rem;
      text-align:center;
      left:20%;
    }
`