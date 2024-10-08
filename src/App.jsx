import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import "./index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  );
};

export default App;
