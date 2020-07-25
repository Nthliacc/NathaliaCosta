import styled from 'styled-components';

// Nav
export const NavContainer = styled.div`
  height: 10%;
  width: 100%;
  background: rgb(192, 192, 192); 
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LinkNav = styled.a`
  padding: 10px;
  text-decoration: none;
  color: black;
  :hover{
    background-color: black;
    color: white;
  }
`;