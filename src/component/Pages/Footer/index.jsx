import React from 'react';
import { FooterContainer } from './styled';

function Footer() {
  return (
    <FooterContainer id="Contato">
      <input placeholder="Digite seu nome"/>
      <input placeholder="Coloque seu email"/>
      <input placeholder="Escreva sua mensagem ..."/>
      <button>Enviar</button>
    </FooterContainer>
  );
}

export default Footer;