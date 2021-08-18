import React from "react";
import Home from "./Components/Home";
import AdminLogin from "./Components/Login";
import HomeAdminPanel from "./adminpanel/HomeAdminPanel";
import NotFound from "./Components/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import Cart from "./Components/cart/Cart";
import ProductDtails from "./Components/clientpanel/ProductDetails";
import ShowProductsDependsOnCategory from "./Components/clientpanel/ShowProductsDependsOnCategory";
import CustomerForm from "./Components/cart/form/CustomerForm";
import FakePayment from "./Components/cart/payment/FakePayment";
import PaymentResult from "./Components/cart/payment/PaymentResult";
import { Route, Switch } from "react-router-dom";

function Routing() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={AdminLogin} />
        <Route
          exact
          path="/categories/:category"
          component={ShowProductsDependsOnCategory}
        />
        <Route exact path="/products/:title" component={ProductDtails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/customerinfromationform" component={CustomerForm} />
        <Route exact path="/paymentpage" component={FakePayment} />
        <Route exact path="/paymentresult" component={PaymentResult} />
        {/**Protected Login Router */}
        <ProtectedRoute exact path="/adminpanel" component={HomeAdminPanel} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default Routing;
