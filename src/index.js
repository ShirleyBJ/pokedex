import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ErrorPage from "./ErrorPage";
import Home from './components/Home';
import Favorites from './components/Favorites';
import PokemonList from './components/PokemonsList';
import PokemonCard from './components/PokemonCard';
import PokemonListType from './components/PokemonListType';
import Contact from './components/Contact';

import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';

import { MainProvider } from "./contexts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/pokemonList",
        element: <PokemonList />
      },
      {
        path: "/pokemonList/:pokemonParamsName",
        element: <PokemonCard />
      },
      {
        path: "/pokemonListType",
        element: <PokemonListType />
      },
      {
        path: "/pokemonCard",
        element: <PokemonCard />
      },
      {
        path: "/pokemonCard/:pokemonParamsName",
        element: <PokemonCard />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
])

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </MainProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
