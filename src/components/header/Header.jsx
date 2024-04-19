import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled'

export default function Header() {
  return (
    <S.Header>
      <S.BoxLogo>
        <h1>Ana Keyla</h1>
      </S.BoxLogo>
      <S.BoxMenu>
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/sobre'>Sobre mim</Link></li>
          <li><Link to='/projetos'>Projetos</Link></li>
        </ul>
      </S.BoxMenu>
    </S.Header>
  )
}
