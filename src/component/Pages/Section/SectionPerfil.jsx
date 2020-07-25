import React from 'react';
import { PerfilContainer, ImagemPerfil, ImagemIcon } from './styled';
import perfil from '../../Imagens/ntthl.jpeg';
import linkd from '../../Imagens/linked.png';
import github from '../../Imagens/github.jpg';
import gmail from '../../Imagens/gmail.png';
import { IconButton } from '@material-ui/core';

function SectionPerfil() {
  return (
    <PerfilContainer id="SectionPerfil">
      <div >
        <ImagemPerfil src={perfil} />
      </div>
      <div>
        <h1>Nathália Constantino Costa</h1>
        <h4>Estudante de Desenvolvimento Web Full-Stack</h4>
        <IconButton href={"https://www.linkedin.com/in/nthlia-costa/"}>
          <ImagemIcon src={linkd} />
        </IconButton>
        <IconButton href={"https://"}>
          <ImagemIcon src={gmail} />
        </IconButton>
        <IconButton href={"https://github.com/Nthliacc"}>
          <ImagemIcon src={github} />
        </IconButton>
      </div>
    </PerfilContainer>
  );
}

export default SectionPerfil;