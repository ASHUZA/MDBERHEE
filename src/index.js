// on importe ReacDOM pour bracher nos composant

import ReacDOM from "react-dom";


import App from "./app";
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

ReacDOM.render(<App />, document.querySelector("#app"));
