import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(0);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <LeftMenu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </LeftMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Compte</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <CarItem>
          <a href="#">Modèle S</a>
        </CarItem>
        <CarItem>
          <a href="#">Modèle 3</a>
        </CarItem>
        <CarItem>
          <a href="#">Modèle X</a>
        </CarItem>
        <CarItem>
          <a href="#">Modèle Y</a>
        </CarItem>
        <li>
          <a href="#">Véhicules Disponnibles</a>
        </li>
        <li>
          <a href="#">Véhicules D'occasion</a>
        </li>
        <li>
          <a href="#">Reprise</a>
        </li>
        <li>
          <a href="#">Flottes et Entreprises</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Electricité pour les professionnels</a>
        </li>
        <li>
          <a href="#">Industries</a>
        </li>
        <li>
          <a href="#">Energie</a>
        </li>
        <li>
          <a href="#">Nous trouver</a>
        </li>
        <li>
          <a href="#">Evènements</a>
        </li>
        <li>
          <a href="#">Assistance</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;

  a {
    @media (min-width: 1000px) {
      padding-right: 160px;
    }
  }
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 360px;
  z-index: 100;
  list-style: none;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;

    a {
      font-weight: 600;
      white-space: nowrap;
    }
  }
`;

const CustomClose = styled(CloseIcon)``;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CarItem = styled.li`
  @media (min-width: 800px) {
    display: none;
  }
`;
