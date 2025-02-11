import { createRoot } from "react-dom/client";
import { App } from "./src/App";

// biome-ignore lint/style/noNonNullAssertion: initial code
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
