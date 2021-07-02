import React, { useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import AdminLogin from "./Components/AdminLogin";
import HomeAdminPanel from "./Components/AdminPanel/HomeAdminPanel";

function App() {
  //post
  // useEffect(() => {
  //   const fetchTask = async () => {
  //     const obj = {
  //       id: "56",
  //       name: "یادداشت های شخصی لوسی مود مونتگمری",
  //       autohr: "لوسی مود مونتگمری",
  //     };
  //     const response = await axios.post("http://localhost:3000/products", obj);
  //     // const data = await response.json();
  //     console.log(response.data);
  //   };
  //   fetchTask();
  // }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/loginpageforadmins" component={AdminLogin} />
        <Route exact path="/adminpanel" component={HomeAdminPanel} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
