import { useRoutes } from "react-router-dom";
import { routes } from "./Routes/Routes";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


function App() {
  let router = useRoutes(routes);


  ScrollToTop();

  return (
    <>
      {router}
    </>
  );
}

export default App;
