import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurProcess from "./pages/OurProcess";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import AirDuctCleaning from "./pages/Residential/AirDuctCleaning";
import DryerVentCleaning from "./pages/Residential/DryerVentCleaning";
import Aeroseal from "./pages/Residential/Aeroseal";
import AboutAtlantic from "./pages/About/AboutAtlantic";
import ServiceAreas from "./pages/About/ServiceAreas";
import ClientList from "./pages/About/ClientList";
import FAQs from "./pages/About/FAQs";


function App() {
  return (
    <div className="App">
          <BrowserRouter>
       <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ourProcess" element={<OurProcess />} />
              <Route path="/ductcleaning" element={<AirDuctCleaning />} />
              <Route path='/ventcleaning' element={<DryerVentCleaning />} /> 
              <Route path='/aeroseal' element={<Aeroseal />} /> 
              <Route path='/aboutatlantic' element={<AboutAtlantic />} /> 
              <Route path='/serviceareas' element={<ServiceAreas />} /> 
              <Route path='/clientlist' element={<ClientList />} /> 
              <Route path='/faqs' element={<FAQs />} /> 
            </Routes>
       </Layout>
          </BrowserRouter>
    </div>
  );
}

export default App;
