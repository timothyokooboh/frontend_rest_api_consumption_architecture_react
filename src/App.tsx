import useResource from "./hooks/useResource";
import { LIST_COUNTRIES } from "./const/countriesEndpoints";

export default function App() {
  const { loading, response, error } = useResource(LIST_COUNTRIES);

  const countries =
    response &&
    response.data.map((res: { name: { common: string } }) => {
      return <li key={res.name.common}>{res.name.common}</li>;
    });

  let template;

  if (loading) {
    template = <p>loading...</p>;
  } else if (!loading && error) {
    template = <p>an error occured</p>;
  } else if (response) {
    template = <ul>{countries}</ul>;
  }

  return <div className="App">{template}</div>;
}
