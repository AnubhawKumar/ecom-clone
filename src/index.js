import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Errorboundary from "./components/ErrorBoundary/ErrorBoundary";
import { CartProvider } from "./context/cartContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Errorboundary>
      <CartProvider>
        <App />
      </CartProvider>
    </Errorboundary>
  </React.StrictMode>,
  document.getElementById("root")
);
