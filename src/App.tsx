import { Header } from './components/Header';
import { Main } from './components/Main';
import { createHashRouter, Outlet } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { getAllCountry } from './api/country';
import { useAppDispatch } from './app/hooks';
import { selectTheme } from './features/Options/optionsSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export async function rootLoader() {
  const response = await getAllCountry();

  return response;
}

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    loader: rootLoader,
    id: "root",
    children: [
      {
        path: "/",
        element: <HomePage />,
        id: "homepage"
      },
      {
        path: "/country/:name",
        element: <Details />,
      },
    ],
  },
]);

function App() {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
