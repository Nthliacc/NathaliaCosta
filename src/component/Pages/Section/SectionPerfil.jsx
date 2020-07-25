import React from 'react';
import { PerfilContainer, ImagemPerfil ,ImagemIcon } from '../../styled';
import perfil from '../../Imagens/ntthl.jpeg';
import linkd from '../../Imagens/linked.png';
import github from '../../Imagens/github.jpg';
import gmail from '../../Imagens/gmail.png';

function SectionPerfil() {
  return (
    <PerfilContainer className="SectionPerfil">
        <div >
            <ImagemPerfil src={perfil}/>
        </div>
        <div>
            <h1>Nathália Constantino Costa</h1>
            <h4>Estudante de Desenvolvimento Full Stack</h4>
            <ImagemIcon src={linkd} href={"https://www.linkedin.com/in/nthlia-costa/"}/>
            <ImagemIcon src={gmail}/>
            <ImagemIcon src={github}/>
        </div>
    </PerfilContainer>
  );
}

export default SectionPerfil;