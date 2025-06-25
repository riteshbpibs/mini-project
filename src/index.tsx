import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

import "./index.css";
import App from "./App";
import store from "features/store";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "context/AuthContext";
import ModalContextProvider from "context/ModalContext";
import { GlobalStyles } from "assets/StyledComponents/GlobalStyles";

const domNode = document.getElementById("root")!;

const root = ReactDOM.createRoot(domNode);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <GlobalStyles />

        <Provider store={store}>
          <AuthContextProvider>
            <ModalContextProvider>
              <App />
            </ModalContextProvider>
          </AuthContextProvider>
        </Provider>
      </StyleSheetManager>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
