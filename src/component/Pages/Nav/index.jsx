import React from 'react';
import { NavContainer, LinkNav } from '../../styled';

function Nav() {
    return (
        <NavContainer>
            <LinkNav to="/SectionPerfil">HOME</LinkNav>
            <LinkNav to="/SectionFormacoes">FORMAÇÕES</LinkNav>
            <LinkNav to="/SectionProjetos">PROJETOS</LinkNav>
            <LinkNav to="/Contato">CONTATO</LinkNav>
        </NavContainer>
    );
}

export default Nav;
