import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
//import "milligram/dist/milligram.css";
import DataTable from "./DataTable";
import "./style.css";
import "semantic-ui-css/semantic.min.css";

const greetingMessage = <div>This is first message from Workshop!</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<DataTable />);
