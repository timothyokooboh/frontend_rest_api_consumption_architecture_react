# frontend_api_consumption_architecture_react
Created with CodeSandbox

This is an API consumption architecture pattern for frontend applications. <br>
A demo for its use in a React app is also provided.

## Dependencies
1. Typescript
2. Axios
3. React

## Key highlights
1. Typed API endpoints.
2. A `useResource` hook that handles every API call thereby providing <br> a DRY approach to API consumption
across the entire application.

## Example Usage
```
  import useResource from "./hooks/useResource";
  import { LIST_COUNTRIES } from "./const/countriesEndpoints";

  const { loading, response, error } = useResource(LIST_COUNTRIES);
```
