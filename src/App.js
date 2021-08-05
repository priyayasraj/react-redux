import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer"

const App = () => {
  return (
    <Provider store = {store}>
      <div>
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
};

export default App;
