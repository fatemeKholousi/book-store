import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import "./assets/fonts/fonts.css";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <StylesProvider jss={jss}>
        <App />
      </StylesProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
