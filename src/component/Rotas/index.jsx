import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Contato from '../pages/Footer'
import SectionPerfil from '../Pages/Section/SectionPerfil';
import SectionFormacoes from '../Pages/Section/SectionFormacoes';
import SectionProjetos from '../Pages/Section/SectionProjetos';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={SectionPerfil} />
        <Route exact path="/SectionFormacoes" component={SectionFormacoes} />
        <Route exact path="/SectionProjetos" component={SectionProjetos} />
        <Route exact path="/Contato" component={Contato} />
    </BrowserRouter>
);

export default Routes