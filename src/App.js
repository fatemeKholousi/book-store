import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import AdminLogin from "./components/Login";
import HomeAdminPanel from "./adminpanel/HomeAdminPanel";
import NotFound from "./components/NotFound";
import MenuAppBar from "./components/navbar/MenuAppBar";
import CustomTheme from "./assets/customRTl";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/cart/Cart";
import Footer from "./layout/footer";
import ProductDtails from "./components/clientpanel/ProductDetails";
import ShowProductsDependsOnCategory from "./components/clientpanel/ShowProductsDependsOnCategory";
import CustomerForm from "./components/cart/form/CustomerForm";
import FakePayment from "./components/cart/payment/FakePayment";
import PaymentResult from "./components/cart/payment/PaymentResult";

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
            <Switch>
              <Route exact path="/login" component={AdminLogin} />
              <Route
                exact
                path="/categories/:category"
                component={ShowProductsDependsOnCategory}
              />
              <Route exact path="/products/:title" component={ProductDtails} />
              <Route exact path="/cart" component={Cart} />
              <Route
                exact
                path="/customerinfromationform"
                component={CustomerForm}
              />
              <Route exact path="/paymentpage" component={FakePayment} />
              <Route exact path="/paymentresult" component={PaymentResult} />
              /**Protected Login Router */
              <ProtectedRoute
                exact
                path="/adminpanel"
                component={HomeAdminPanel}
              />
              {/* <Route exact path="/notfound" component={NotFound} /> */}
              <Route exact path="/" component={Home} />
              <Route path="*" component={NotFound} />
            </Switch>
          </StylesProvider>
        </ThemeProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
