import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Container } from './Container';
import { useAppDispatch } from '../app/hooks';
import { useSelector } from 'react-redux';
import { selectTheme, setTheme } from '../features/Options/optionsSlice';

const HeaderEl = styled.div`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoon size="14px" />
              ) : (
              <IoMoonOutline size="14px" />
            )}
            {' '}
            <span style={{ marginLeft: '0.75rem' }}>
            {theme === 'light' ? 'dark' : 'light'} Theme
            </span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
