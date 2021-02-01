import React from "react"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import { Route, Switch } from "react-router-dom"
import "./App.css"
import Header from "./components/header/header.component"

const HatsPage = () => (
  <div>
    <h1>SHOP PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />{" "}
      <Switch>
        <Route component={HomePage} exact path='/'></Route>
        <Route component={ShopPage} exact path='/shop'></Route>
        <Route component={SignInAndSignUpPage} exact path='/signin'></Route>

      </Switch>
    </div>
  )
}

export default App
