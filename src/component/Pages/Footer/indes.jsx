import React from 'react';
import styled from 'styled-components';
import botton from '../../Imagens/botton.jpg'

const FooterContainer = styled.div`
  height: 30%;
  width: 100%;
  background-image: url(${botton});
  position: fixed-relative;
  margin-bottom: 0;
  display: flex;
  flex-direction: rown;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <FooterContainer className="Footer">
      <input placeholder="Digite seu nome"/>
      <input placeholder="Coloque seu email"/>
      <input placeholder="Escreva sua mensagem ..."/>
      <button>Enviar</button>
    </FooterContainer>
  );
}

export default Footer;