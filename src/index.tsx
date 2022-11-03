import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ConfigProvider } from "antd";
import plPL from "antd/es/locale/pl_PL";

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ConfigProvider locale={plPL}>
        <App />
      </ConfigProvider>
    </ApolloProvider>
  </React.StrictMode>
);
