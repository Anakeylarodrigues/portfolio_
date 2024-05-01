import React from 'react'
import Header from '../../components/header/Header'
import * as S from './styled'
import Banner_sofa from '../../assets/Banner_sofa.png'
import Carousel from 'react-elastic-carousel'

export default function Projetos() {
  return (
    <S.Main>
        <Header/>
        {/* <h1>Projetos</h1> */}
        <S.BoxProjetos>
        <h1>Projetos</h1>
          <S.Projetos>
              <div>
                <img src={Banner_sofa} alt="" />
                <p>Projeto 1</p>
                <button>Link do projeto</button>
              </div>
              <div>
                <img src={Banner_sofa} alt="" />
                <p>Projeto 2</p>
                <button>Link do projeto</button>
              </div>
              <div>
                <img src={Banner_sofa} alt="" />
                <p>Projeto 3</p>
                <button>Link do projeto</button>
              </div>
              <div>
                <img src={Banner_sofa} alt="" />
                <p>Projeto 4</p>
                <button>Link do projeto</button>
              </div>
          </S.Projetos>
        </S.BoxProjetos>
    </S.Main>
  )
}
