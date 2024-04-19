import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Header = styled.header`
    /* border: solid red 2px; */
    width: 100%;
    height: 15vh;
    padding: 25px;
    background-color: #4A5051;
    display: flex;
    justify-content: space-around;

    ul {
        display: flex;
        justify-content: space-around;
        /* margin-top: 25px; */
        font-size: 25px;
        font-weight: bold;
    }

    li {
        list-style: none;

        @media (max-width: 500px) {
        height: 5vh;
        }
    }

    @media (max-width: 700px) {
        /* width: 100%; */
        height: 30vh;
    }
`

export const BoxLogo = styled.div`
    /* border: solid yellow 2px; */
    /* margin-top: 20px; */
    color: white;

    /* @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        padding-left: 20px;
    } */
`

export const BoxMenu = styled.nav`
    /* border: solid wheat 2px; */
    width: 50%;
    
    a {
        color: white;
        text-decoration: none;
    }

    @media (max-width: 700px) {
        height: 38vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    ul {
        width: 100%;
    }

    li:nth-child(1) {
        border-top: solid 1px white; 
    }

    a {
        color: white;  
        text-decoration: none;
    }
    }
`