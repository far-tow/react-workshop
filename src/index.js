import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import DataTable from "./DataTable";
import "./style.css";

const greetingMessage = <div>This is first message from Workshop!</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<DataTable />);
