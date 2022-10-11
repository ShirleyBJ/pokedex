import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ErrorPage from "./ErrorPage";
import Home from './components/Home';
import Favorites from './components/Favorites';
import PokemonList from './components/PokemonsList';
import PokemonCard from './components/PokemonCard';

import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';

//TODO: route retour vers liste
const router = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children : [
      {
        path : "",
        element: <Home/>
      },
      {
        path : "/favorites",
        element: <Favorites/>
      },
      {
        path : "/pokemonList",
        element: <PokemonList/>
      },
      {
        path : "/pokemonCard",
        element: <PokemonCard/>
      },
    ]
  },
])

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
