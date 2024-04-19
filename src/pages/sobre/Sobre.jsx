import React from 'react'
import Header from '../../components/header/Header'
import * as S from './styled'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'

export default function Sobre() {
  return (
    <S.Main>
        <Header/>
        <S.BoxSobre>
            <h1>Sobre</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nesciunt, tempore totam quo id nulla neque vel hic similique nobis nostrum a. Officiis eos assumenda amet numquam culpa dolor provident?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus fugit neque sint facilis dolore accusamus consequuntur, minima animi veniam! Deleniti ducimus neque beatae dolor quisquam? Ab ad maiores nemo?
            </p>
        </S.BoxSobre>
        <S.BoxHabilidades>
          <h2>Habilidades</h2>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
        </S.BoxHabilidades>
    </S.Main>
  )
}
