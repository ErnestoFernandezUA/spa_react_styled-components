import { Header } from './components/Header';
import { Main } from './components/Main';
import { createHashRouter, Outlet } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { getAllCountry } from './api/country';
import { createBrowserRouter } from "react-router-dom";

export async function rootLoader() {
  const response = await getAllCountry();

  return response;
}

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFound />,
//     loader: rootLoader,
//     id: "root",
//     children: [
//       {
//         path: "/home",
//         element: <HomePage />,
//         id: "homepage"
//       },
//       {
//         path: "/country/:name",
//         element: <Details />,
//       },
//     ],
//   },
// ]);

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
  console.log('render app');

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
