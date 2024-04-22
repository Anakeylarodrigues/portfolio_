import styled from "styled-components";

export const Main = styled.main`
    background-color: #1b1b1b;
    /* border: solid red 2px; */
    height: 100vh;
`

export const BoxInicio = styled.div`
    /* border: solid blue 2px; */
    display: flex;
    justify-content: center;
    align-items: center;

    h1, h2 {
        font-size: 3rem;
        color: white;
        text-align: center;
        /* border: solid yellow 2px; */
    }

    p {
        font-size: 1.5rem;
        width: 55vw;
        color: white;
        margin-top: 30px;
        /* border: solid orange 2px; */
    }

    /* img {
        width: 30vw;
        border-radius: 50%;
    } */
`

export const Foto = styled.div`
    /* border: solid purple 2px; */
    margin-top: 40px;

    img {
        width: 30vw;
        border-radius: 50%;
    }
`