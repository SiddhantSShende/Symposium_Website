import { createRoot } from "react-dom/client";
console.log("Application starting...");
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
