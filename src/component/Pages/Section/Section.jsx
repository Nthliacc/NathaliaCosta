import React from 'react';
import { SectionContainer } from './styled';
import SectionPerfil from './SectionPerfil'
import SectionFormacoes from './SectionFormacoes';
import SectionProjetos from './SectionProjetos';

function Section() {
  return (
    <SectionContainer>
      <SectionPerfil />
      <SectionFormacoes/>
      <SectionProjetos/>
    </SectionContainer>
  );
}

export default Section;
