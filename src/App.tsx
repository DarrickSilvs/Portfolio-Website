import {
  BrowserRouter as Router,
} from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";

import Pages from "./Pages";

const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App