import React from "react";
import { ProjetosContainer, Titulo, Bloco } from './styled';

function SectionProjetos() {
  return (
    <ProjetosContainer id="SectionProjetos">
      <Titulo>
        <h1>PROJETOS</h1>
      </Titulo>
      <div>
        <Bloco id="projeto1">
          <h3 href="https://projetofuture4nathaliacc--nathliacosta.repl.co/">
            Projeto da Selecão - Labenu_
          </h3>
          <p>Projeto para apresentar no processo seletivo da antiga Future4, hoje Labenu_.</p>
        </Bloco>
        <Bloco id="projeto2">
          <h3 href="">Sistema de Loja - Labenu_</h3>
          <p>
            Projeto para avaliação de apredizagem de código HTML e CSS na
            primeira semana de aula na Labenu_
          </p>
        </Bloco>
      </div>
    </ProjetosContainer>
  );
}

export default SectionProjetos;
