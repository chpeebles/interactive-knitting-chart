import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      fallback={
        <p className="text-center text-red-500 text-xl">
          Sorry! Something went wrong. Please try again later.
        </p>
      }
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
