import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ValueCard } from "./components";
import { AdminDetailsView, DetailsView, ExcellDetails } from "./pages/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={AdminDetailsView} />
          <Route path="/excell_details" Component={ExcellDetails} />
          <Route path="/*" Component={ValueCard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
