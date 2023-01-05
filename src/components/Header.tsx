import styled from 'styled-components';
import { IoArrowBack, IoMoon, IoMoonOutline, IoSunny } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container } from './Container';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useSelector } from 'react-redux';
import { selectDevice, selectTheme, setTheme } from '../features/Options/optionsSlice';
import { Button } from './Button';

const HeaderEl = styled.div`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  line-height: 2.5rem;
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: var(--color-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-light);
  line-height: 2.5rem;
`;

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);
  const {pathname} = useLocation();
  const screen = useAppSelector(selectDevice);

  console.log('screen = ', screen);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          { pathname !== '/' ? (
            <Button onClick={() => navigate(-1)}>
              <IoArrowBack/>
              Back
            </Button>
          ) : (
            <>
              {(screen !== 'Mobile') && (
                <Title>Where is the world?</Title>
              )}
              <NavLink to="/flags">Flags</NavLink>
            </>
          )}

          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoon size="14px" />
            ) : (
              <IoSunny size="14px" />
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
