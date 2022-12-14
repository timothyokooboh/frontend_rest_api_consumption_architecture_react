# frontend_api_consumption_architecture_react
Created with CodeSandbox

This is a REST API consumption architecture pattern for frontend applications. <br>
A demo for its use in a React app is also provided <a href="https://codesandbox.io/s/github/timothyokooboh/frontend_api_consumption_architecture_react" target="_blank">here</a>

<a href="https://github.com/timothyokooboh/frontend_rest_api_consumption_architecture_vue">Here</a> is the same architecture pattern demonstrated with Vue.js

## Dependencies
1. Typescript
2. Axios
3. React

## Key highlights
1. Typed API endpoints.
2. Endpoints documented as constants that leverage the `APIEndpoint` type <br>
which is a union type described below<br>
```
  type APIEndpoint =
  | GETAPIEndpoint
  | POSTAPIEndpoint
  | PUTAPIEndpoint
  | PATCHAPIEndpoint
  | DELETEAPIEndpoint;

export default APIEndpoint;
```
3. A `useResource` hook that handles every API call thereby providing <br> a DRY approach to API consumption
across the entire application. <br>
This single custom hook returns three states to the consumer component <br>
```
a. loading
b. response
c. error
```

## Example Usage
```
  import useResource from "./hooks/useResource";
  import { LIST_COUNTRIES } from "./const/countriesEndpoints";

  const { loading, response, error } = useResource(LIST_COUNTRIES);
```
Where `LIST_COUNTRIES` is a constant that documents the endpoint <br>
for listing countries from an API
```
 export const LIST_COUNTRIES: GETAPIEndpoint = {
  url: "/v3.1/all",
  method: "GET"
};
```
