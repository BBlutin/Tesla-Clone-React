import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Réservez un essai sans contact"
        isLink="true"
        backgroundImg="model-3.jpg"
        leftBtn="Configuration personnalisée"
        rightBtn="Véhicules disponnibles"
        isFirst="true"
      />
      <Section
        title="Model S"
        description=""
        backgroundImg="model-s.jpg"
        leftBtn="Configuration personnalisée"
        rightBtn="Véhicules disponnibles"
      />
      <Section
        title="Model X"
        description=""
        backgroundImg="model-x.jpg"
        leftBtn="Configuration personnalisée"
        rightBtn="Véhicules disponnibles"
      />
      <Section
        title="Model Y"
        description=""
        backgroundImg="model-y.jpg"
        leftBtn="Configuration personnalisée"
        rightBtn="Véhicules disponnibles"
      />
      <Section
        title="Systèmes d'énergie solaire et Powerwalls"
        description="De l’énergie pour tous vos besoins"
        backgroundImg="solar-panel.jpg"
        leftBtn="En savoir plus"
        rightBtn=""
      />
      <Section
        title="Accessoires"
        description=""
        backgroundImg="accessories.jpg"
        leftBtn="Commander maintenant"
        rightBtn=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
