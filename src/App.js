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
import Career from "./pages/About/Career";
import Reviews from "./pages/Reviews";
import CommAirduct from "./pages/Commercial/CommAirduct";
import Contact from "./pages/Contact";


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
              <Route path='/careers' element={<Career />} /> 
              <Route path='/reviews' element={<Reviews />} /> 
              <Route path='/commductcleaning' element={<CommAirduct />} /> 
              <Route path='/contact' element={<Contact />} /> 
            </Routes>
       </Layout>
          </BrowserRouter>
    </div>
  );
}

export default App;
