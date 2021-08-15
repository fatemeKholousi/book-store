import React from "react";
import Routing from "./Routing";
import Footer from "./layout/footer";
import MenuAppBar from "./Components/navbar/MenuAppBar";
import CustomTheme from "./assets/customRTl";
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <>
      <div className="app">
        <ThemeProvider theme={CustomTheme}>
          <StylesProvider jss={jss}>
            <MenuAppBar />
            <Routing />
          </StylesProvider>
        </ThemeProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
