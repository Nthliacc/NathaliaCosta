import React from 'react';
import { NavContainer, LinkNav } from './styled';
import { palette } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Nav() {
    return (
        <NavContainer>
            <ButtonGroup variant="text" aria-label="text primary button group">
                <Button href={'#'}>HOME</Button>
                <Button href={'#SectionFormacao'} >FORMAÇÕES</Button>
                <Button href={'#SectionProjetos'}>PROJETOS</Button>
                <Button href={'#Contato'}>CONTATO</Button>
            </ButtonGroup>
        </NavContainer>
    );
}

export default Nav;
