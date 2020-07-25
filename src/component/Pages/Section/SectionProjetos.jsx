import React from "react";
import {ProjetosContainer} from './styled';

function SectionProjetos() {
  return (
    <ProjetosContainer className="SectionProjetos">
      <div>
        <h1>PROJETOS</h1>
      </div>
      <div class="projetos-descricao">
        <div id="projeto1">
          <a href="https://projetofuture4nathaliacc--nathliacosta.repl.co/">
            Projeto da Selecão - Labenu_
          </a>
          <p>Projeto para apresentar no processo seletivo da antiga Future4, hoje Labenu_.</p>
        </div>
        <div id="projeto2">
          <a href="">Sistema de Loja - Labenu_</a>
          <p>
            Projeto para avaliação de apredizagem de código HTML e CSS na
            primeira semana de aula na Labenu_
          </p>
        </div>
      </div>
    </ProjetosContainer>
  );
}

export default SectionProjetos;
