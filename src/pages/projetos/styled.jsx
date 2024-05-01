import styled from "styled-components";

export const Main = styled.main`
    /* border: solid blue 2px; */
    background-color: #1b1b1b;
    height: 100vh;
`

export const BoxProjetos = styled.section`
    color: white;
    text-align: center;
    /* border: solid red 2px; */
    height: 70%;
    padding: 10px;
    font-size: 20px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
`

export const Projetos = styled.div`
    /* border: solid wheat 2px; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    height: 100%;
    

    div {
        border: solid white 2px;
        border-radius: 10px;
        height: 40vh;
    }

    p {
        font-size: 20px;
        margin-bottom: 15px;
    }
    
    button {
        width: 50%;
        height: 5vh;
        font-size: 15px;
        border-radius: 5px;
        cursor: pointer;
    }
`