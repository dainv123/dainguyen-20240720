import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
console.error = (...args: any) => { if (!/defaultProps/.test(args[0])) console.error(...args) };
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);