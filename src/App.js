import React from "react"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"

import { Route, Switch } from "react-router-dom"
import "./App.css"

const HatsPage = () => (
  <div>
    <h1>SHOP PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} exact path='/'></Route>
        <Route component={ShopPage} exact path='/shop'></Route>
      </Switch>
    </div>
  )
}

export default App
