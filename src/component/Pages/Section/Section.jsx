import React from 'react';
import { SectionContainer } from '../../styled';
import SectionPerfil from '../Section/SectionPerfil'
import SectionFormacoes from '../Section/SectionFormacoes';
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
