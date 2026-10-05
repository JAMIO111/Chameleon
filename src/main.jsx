import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App.jsx";
import "@/index.css";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Production pages are prerendered, so hydrate the existing markup;
// the dev server serves an empty root and renders from scratch.
const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
