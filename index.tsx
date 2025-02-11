import { createRoot } from "react-dom/client";

// biome-ignore lint/style/noNonNullAssertion: initial code
const root = createRoot(document.getElementById("app")!);
root.render(<h1>Hello, world</h1>);
