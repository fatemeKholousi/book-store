import React from 'react'
import Home from './component-kit/Home'
import AdminLogin from './component-kit/Login'
import HomeAdminPanel from './adminpanel/HomeAdminPanel'
import NotFound from './component-kit/NotFound'
import ProtectedRoute from './component-kit/ProtectedRoute'
import Cart from './component-kit/cart/Cart'
import ProductDtails from './component-kit/clientpanel/ProductDetails'
import ShowProductsDependsOnCategory from './component-kit/clientpanel/ShowProductsDependsOnCategory'
import CustomerForm from './component-kit/cart/form/CustomerForm'
import FakePayment from './component-kit/cart/payment/FakePayment'
import PaymentResult from './component-kit/cart/payment/PaymentResult'
import { Route, Switch } from 'react-router-dom'

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
  )
}

export default Routing
