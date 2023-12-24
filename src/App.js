import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurProcess from "./pages/OurProcess";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import AirDuctCleaning from "./pages/Residential/AirDuctCleaning";
import DryerVentCleaning from "./pages/Residential/DryerVentCleaning";


function App() {
  return (
    <div className="App">
          <BrowserRouter>
       <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ourProcess" element={<OurProcess />} />
              <Route path="/airDuctCleaning" element={<AirDuctCleaning/>} />
              <Route path='/dryerVentCleaning' element={<DryerVentCleaning/>} /> 
            </Routes>
       </Layout>
          </BrowserRouter>
    </div>
  );
}

export default App;
