import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={"...loading"}>
        <App />
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
