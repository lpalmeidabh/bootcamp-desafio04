import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import facebookLogo from '../../assets/images/facebook.svg';
import { StyledHeader } from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <img src={facebookLogo} alt="Facebook Logo" />
      <div>
        <p>Meu Perfil</p>
        <MdAccountCircle size={24} color="#FFF" />
      </div>
    </StyledHeader>
  );
}
