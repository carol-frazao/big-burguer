import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Inicio from "./components/Inicio/Inicio";
import Burguers from "./components/Burguers/Burguers";
import About from "./components/About/About";
import Contato from "./components/Contato/Contato";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Inicio} exact />
      <Route path="/burguers" component={Burguers} />
      <Route path="/sob" component={About} />
      <Route path="/contato" component={Contato} />
    </BrowserRouter>
  );
};

export default Routes;
