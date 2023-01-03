import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  width: 100%;
  padding: 2rem 0;

  display: grid;
  grid-template-column: repeat(1, 1fr);
  gap: 2rem;

  @media(min-width: 767px) {
    grid-template-column: repeat(2, 1fr);
    gap: 3rem;

    padding: 2.5rem 0;
  }

  @media(min-width: 1024px) {
    grid-template-column: repeat(4, 1fr);
    gap: 4rem;
  }
`;

const CardImage = styled.img`
`;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListitem = styled.li``;


interface CardProps {
  img: string;
  name: string;
  info: {
    title: string;
    description: string;
  }[];
  onClick: () => void;
}

export const Card: FC<CardProps> = ({ img, name, info, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage/>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(el => (
            <CardListitem key={el.title}>
              <b>{el.title}: {el.description}</b>
            </CardListitem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};