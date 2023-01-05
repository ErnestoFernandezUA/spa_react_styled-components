import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: (--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1.5rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
`;

const CardListitem = styled.li`
  font-size: var(--fs-md);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;


interface CardProps {
  img: string;
  name: string;
  info: {
    title: string;
    description: string;
  }[];
  onClick: () => void;
}

export const Flag: FC<CardProps> = ({ img, name, info, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name}/>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        {/* <CardList>
          {info.map(el => (
            <CardListitem key={el.title}>
              <b>{el.title}:</b>&nbsp;{el.description}
            </CardListitem>
          ))}
        </CardList> */}
      </CardBody>
    </Wrapper>
  );
};