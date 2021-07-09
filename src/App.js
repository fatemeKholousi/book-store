import React,{useState,useRef} from "react";
import { Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import AdminLogin from "./Components/AdminLogin";
import HomeAdminPanel from "./adminpanel/HomeAdminPanel";
import NotFound from "./Components/NotFound";
import MenuAppBar from "./Components/MenuAppBar";
import CustomTheme from "./assets/customRTl";
import { ThemeProvider } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import ProtectedRoute from "./Components/ProtectedRoute";
import './index.css'
// Configure JSS for RTL
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={CustomTheme}>
        <StylesProvider jss={jss}>
          <MenuAppBar />
       <Switch>
           <Route exact path="/login" component={AdminLogin} />
            /**Protected Login Router */
            <ProtectedRoute exact path="/adminpanel" component={HomeAdminPanel}/>
            <Route exact path="/notfound" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
        </StylesProvider>
      </ThemeProvider>
         </div>
  );
}

export default App;
