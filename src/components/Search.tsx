import React, { FC } from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  height: 50px;
  font-family: var(--family);

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  
  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 330px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: "Search for a country...",
})`
  margin-left: 1rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--color-text);
  
  & div[search-clear] {
    border: 1px solid red;
  }
`;

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};