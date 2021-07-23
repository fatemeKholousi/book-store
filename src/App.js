import React from "react";
import { NavLink, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import HomeAdminPanel from "./adminpanel/HomeAdminPanel";
import NotFound from "./components/NotFound";
import MenuAppBar from "./components/navbar/MenuAppBar";
import CustomTheme from "./assets/customRTl";
import { ThemeProvider } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from './components/Cart'
import Footer from './layout/footer'
import ProductDtails from './components/clientpanel/ProductDetails'
import ShowProductsDependsOnCategory from "./components/clientpanel/ShowProductsDependsOnCategory";
// Configure JSS for RTL
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
function App() {

  return (
    <div className="app" style={{      backgroundColor: 'rgba( 255, 252, 238 ,0.7)',
  }}>

      <ThemeProvider theme={CustomTheme}>
        <StylesProvider jss={jss}>
          <MenuAppBar />
       <Switch>
           <Route exact path="/login" component={AdminLogin} />
           <Route exact path="/categories/:category" component={ShowProductsDependsOnCategory } />
           <Route exact path="/products/:title" component={ProductDtails} />
           <Route exact path="/cart" component={Cart} />

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
