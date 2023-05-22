import { gql } from "@apollo/client";

export interface Language {
  name: string;
}

export interface State {
  name: string;
  code: string;
}
export interface Country {
  code: string;
  name: string;
  currency: string;
  emoji: string;
  capital?: string;
  emojiU?: string;
  languages?: Language[];
  phone?: string;
  states?: State[];
}

export interface Continent {
  code: string;
  name: string;
  countries?: Country[];
}

export const GET_CONTINENTS_QUERIES = gql`
  query continentsQuery {
    continents {
      code
      name
    }
  }
`;

export const GET_COUNTRIES_FROM_CONTINENT = gql`
  query countriesFromContinentQuery($code: String!) {
    countries(filter: { continent: { eq: $code } }) {
      code
      name
      emoji
    }
  }
`;

export const GET_COUNTRY_FROM_CODE = gql`
  query countryFromCode($code: ID!) {
    country(code: $code) {
      name
      code
      capital
      currency
      emoji
      emojiU
      languages {
        name
      }
      phone
      states {
        name
        code
      }
    }
  }
`;
