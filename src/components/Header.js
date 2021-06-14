import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(0);

  return (
    <Container>
      <img src="/images/logo.svg" alt="logo" />
      <LeftMenu>
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
      </LeftMenu>
      <RightMenu>
        <p>Shop</p>
        <p>Compte</p>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <CarItem>
          <p>Modèle S</p>
        </CarItem>
        <CarItem>
          <p>Modèle 3</p>
        </CarItem>
        <CarItem>
          <p>Modèle X</p>
        </CarItem>
        <CarItem>
          <p>Modèle Y</p>
        </CarItem>
        <li>
          <p>Véhicules Disponnibles</p>
        </li>
        <li>
          <p>Véhicules D'occasion</p>
        </li>
        <li>
          <p>Reprise</p>
        </li>
        <li>
          <p>Flottes et Entreprises</p>
        </li>
        <li>
          <p>Cybertruck</p>
        </li>
        <li>
          <p>Roadster</p>
        </li>
        <li>
          <p>Electricité pour les professionnels</p>
        </li>
        <li>
          <p>Industries</p>
        </li>
        <li>
          <p>Energie</p>
        </li>
        <li>
          <p>Nous trouver</p>
        </li>
        <li>
          <p>Evènements</p>
        </li>
        <li>
          <p>Assistance</p>
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

  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: no-wrap;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
    cursor: pointer;
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

    p {
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
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
