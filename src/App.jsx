import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Components/Footer";
import Appbar from "./Components/Appbar";

import AllRoutes from "./Components/AllRoutes";
function App() {
  //
  return (
    <Router>
      <Appbar />
      <AllRoutes />
      <Footer />
    </Router>
  );
}

export default App;
