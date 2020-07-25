import React from 'react';
import { FormacaoContainer, Titulo, Bloco } from './styled';

function SectionFormacao() {
  return (
    <FormacaoContainer id='SectionFormacao'>
        <Titulo>
            <h1>FORMAÇÕES</h1>
        </Titulo>
        <div>
            <Bloco>
                <h3>Desenvolvimento Web, Full Stack - Labenu_</h3>
                <p>Inicio em 16/março/2020, com previsão de término em setembro/2020</p>
            </Bloco>
            <Bloco>
                <h3> Serviço Social - UnP</h3>
                <p>Inicio em agosto/2013 - Conclusão em julho/2017</p>
            </Bloco>
        </div>
    </FormacaoContainer>
  );
};

export default SectionFormacao;