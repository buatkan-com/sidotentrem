import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "40px",
            background: "#f5f0e6",
            color: "#2b211b",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <section style={{ maxWidth: 720 }}>
            <p
              style={{
                letterSpacing: ".16em",
                textTransform: "uppercase",
                fontSize: 12,
              }}
            >
              Sido Tentrem · Runtime Error
            </p>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 48,
                lineHeight: 1.05,
              }}
            >
              Aplikasi gagal dirender.
            </h1>
            <p style={{ opacity: 0.7 }}>
              Buka DevTools → Console untuk melihat detail error. Setelah
              memperbaiki dependency, restart Vite.
            </p>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                padding: 16,
                background: "#e8e0d3",
                overflow: "auto",
              }}
            >
              {String(this.state.error?.stack || this.state.error)}
            </pre>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
