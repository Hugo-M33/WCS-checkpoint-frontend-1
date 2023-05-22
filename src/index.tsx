import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  GET_CONTINENTS_QUERIES,
  GET_COUNTRIES_FROM_CONTINENT,
  GET_COUNTRY_FROM_CODE,
} from "./apollo/queries";
import ContinentsPage from "./pages/continents";
import CountryDetail from "./pages/continents/code/countries/code";
import CountriesPage from "./pages/continents/code/countries";
import RedirectTo from "./components/RedirectTo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "continents",
        element: <ContinentsPage />,
        loader: async (args) => {
          console.log(args);
          const { data } = await client.query({
            query: GET_CONTINENTS_QUERIES,
          });
          return data.continents;
        },
      },
      {
        path: "continents/:code",
        element: <RedirectTo to="countries" />,
      },
      {
        path: "continents/:code/countries",
        element: <CountriesPage />,
        loader: async (args) => {
          const { code } = args.params;
          const { data } = await client.query({
            query: GET_COUNTRIES_FROM_CONTINENT,
            variables: { code },
          });
          return data.countries;
        },
      },
      {
        path: "continents/:continentCode/countries/:code",
        element: <CountryDetail />,
        loader: async (args) => {
          const { code } = args.params;
          const { data } = await client.query({
            query: GET_COUNTRY_FROM_CODE,
            variables: { code },
          });
          return data.country;
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
