import React from 'react'
import styled from 'styled-components'

export default function WelcomeScreen({ onStart }) {
    return ( <
        Container >
        <
        div >
        <
        h2 className = "heading" > Welcome to the Survey! < /h2> <
        button className = "btn"
        onClick = { onStart } > Start Survey < /button> <
        /div> <
        /Container>
    )
}

const Container = styled.div `
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
        width:250px;
        height:80px;
        color:white;
    }
    .btn:hover{
        background-color:#07248C;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    @media (max-width: 768px) {
    .heading {
      font-size: 1.8rem;
      text-align:center;
      left:18%;
    }
    .btn{
        font-size: 1rem;
        width:150px;
        height:50px;
    }
  }
`