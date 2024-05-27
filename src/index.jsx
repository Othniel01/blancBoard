import ReactDOM from "react-dom/client";

// import App from "./App.jsx";
import BoardCanvas from "./BoardCanvas";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<BoardCanvas />);
