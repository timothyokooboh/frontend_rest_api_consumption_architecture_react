import { AxiosRequestConfig } from "axios";

type APIEndointConfig = Omit<AxiosRequestConfig, "method" | "data" | "params">;

type Payload = {
  [key: string]: unknown;
};

type APIPayload = {
  data: Payload;
};

type OptionalAPIPayload = Partial<APIPayload>;

export interface GETAPIEndpoint extends APIEndointConfig {
  method: "GET";
  params?: Payload;
}

export interface POSTAPIEndpoint extends APIEndointConfig, APIPayload {
  method: "POST";
}

export interface PATCHAPIEndpoint extends APIEndointConfig, APIPayload {
  method: "PATCH";
}

export interface PUTAPIEndpoint extends APIEndointConfig, APIPayload {
  method: "PUT";
}

export interface DELETEAPIEndpoint
  extends APIEndointConfig,
    OptionalAPIPayload {
  method: "DELETE";
}

type APIEndpoint =
  | GETAPIEndpoint
  | POSTAPIEndpoint
  | PUTAPIEndpoint
  | PATCHAPIEndpoint
  | DELETEAPIEndpoint;

export default APIEndpoint;
