import React from 'react';
import { FormacaoContainer } from './styled';

function SectionFormacao() {
  return (
    <FormacaoContainer id='SectionFormacao'>
        <div>
            <h1>FORMAÇÕES</h1>
        </div>
        <div>
            <div>
                <h3>Desenvolvimento Web, Full Stack - Labenu_</h3>
                <br/>
                <p>Inicio em 16/março/2020, com previsão de término em semtebro/2020</p>
            </div>
            <div>
                <h3> Serviço Social - UnP</h3>
                <br/>
                <p>Inicio em agosto/2013 - Conclusão em julho/2017</p>
            </div>
        </div>
    </FormacaoContainer>
  );
};

export default SectionFormacao;