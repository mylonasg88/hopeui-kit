/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { GiSpiderMask } from 'react-icons/gi';

import { Container, Section, Description, Warning, Link } from './styles';

const Home = () => {
  console.log('it happened');
  return (
    <Container>
      <Section>
        <Description>
          "With great power there must also come great responsibility"
        </Description>
        <p>or simply</p>
        <Description>"With great power comes great responsibility"</Description>
      </Section>
      <GiSpiderMask size={40} />
    </Container>
  );
};

export default Home;
