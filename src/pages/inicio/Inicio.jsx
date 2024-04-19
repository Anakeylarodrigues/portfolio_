import React from 'react'
import Header from '../../components/header/Header'
import * as S from './styled'
import fotoeu from '../../assets/fotoeu.jpeg'

export default function Inicio() {
  return (
    <S.Main>
        <Header/>
          <S.BoxInicio>
              <div>
                <h1>Olá, meu nome é Ana!</h1>
                <h2>Sou desenvolvedora front-end.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem esse dolor nisi quos, quo nesciunt voluptates error deleniti quam deserunt neque dolore atque explicabo. Voluptate eligendi vero illo minus nam!</p>
              </div>
          
              <S.Foto>
                <img src={fotoeu} alt="" />
              </S.Foto>
          </S.BoxInicio>
    </S.Main>
  )
}
