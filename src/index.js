import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import "./assets/fonts/fonts.css";
import {Provider} from 'react-redux'

import store,{ persistor} from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <StylesProvider jss={jss}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
       <App />  
       </PersistGate>
        </Provider>
      </StylesProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
