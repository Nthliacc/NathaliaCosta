import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
import { FooterContainer } from './styled';

function Footer() {
  return (
    <FooterContainer id="Contato">
      <p><strong>Email: </strong>n.athiccosta@gmail.com</p>
    </FooterContainer>
  );
}

export default Footer;