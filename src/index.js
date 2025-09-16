import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <App />
);
